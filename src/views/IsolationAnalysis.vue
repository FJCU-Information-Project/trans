<template>
  <div style="font-size: 20px">
    <el-row>
      <el-col :span="24">
        <div class="grid-content banner">
          <Navbar />
          <div class="ban-title">
            <h1>Isolation Analysis</h1>
            <span style="font-weight: bolder" class="sub-title">
              以某肇事因素為條件，呈現出沒有與該肇事因素同時發生的節點。
            </span>
            <div class="select-group">
              <div class="block">
                <!-- <span class="demonstration">Child options expand when hovered</span> -->
                <el-cascader
                  v-model="value"
                  :options="attributes"
                  :props="props"
                  @change="handleChange"
                  placeholder="請選擇事故節點"
                ></el-cascader>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row class="con_flex">
      <el-col :span="23" class="analysis-table content">
        <h1>Isolation Analysis</h1>
        <hr />
        <p>
          系統將針對所選的肇事因素，找出與此因素毫無關聯的肇事因素節點，進一步以網路圖呈現出整體資料集的分布情形。<br>
          權重為0的節點，代表在該資料集中並沒有與所選節點同時發生的紀錄，且通常也是整體網路圖中，相對邊陲的節點。
        </p>
        
        <!--
          <el-card class="box-card" v-if="value !== ''">
          <div class="card-header">
            <span>起始節點:</span>
            <span>{{isolationData[0].from_id_name}}</span>
          </div>
        </el-card>
        --> 
        </el-col>
        <el-col :span="11" class="analysis-table snatable">
        <div v-loading="loading" class="grid-content bg-purple main_sec">
          <el-table
            :data="isolationData"
            stripe
            style="width: 100%"
            class="basictable"
            height="820"
          >
            <el-table-column prop="from_id_name" label="起始節點名稱" />
            <el-table-column prop="to_id_name" label="終點節點名稱" />
            <el-table-column prop="total" label="權重" />
          </el-table>
        </div>
      </el-col>
      
      <el-col :span="12" class="snapic">
        <div
          v-loading="loading"
          class="grid-content bg-purple-light iframe_main_sec"
        >
          <iframe
            ref="Iframe"
            :src="src"
            frameborder="0"
            width="100%"
            height="100%"
          >
            <!-- 社會網路圖 -->
          </iframe>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "IslationAnalysis",
  components: {
    Navbar,
  },
  data() {
    return {
      attributes: [],
      value: "",
      isolationData: [],
      tableData: [],
      props: {
        expandTrigger: "hover",
      },
      loading: false,
      src: "",
    };
  },
  methods: {
    iframeLoad() {
      this.loading = true;
      const iframe = this.$refs.Iframe;
      if (iframe.attachEvent) {
        // For IE
        iframe.attachEvent("onload", () => {
          this.loading = false;
        });
      } else {
        // Others Browser
        iframe.onload = () => {
          this.loading = false;
        };
      }
    },
    handleChange() {
      this.loading = true;
      // const api = `https://fju-trans.herokuapp.com`;
      const api = `http://140.136.155.121:50000`;
      
      const formData = new FormData()
      formData.append("token", localStorage.getItem("owner")); // Form userToken
      formData.append("dataset", localStorage.getItem("dataset")); // Form userToken

      this.$http
        .post(api + "/isolationReceive?node=" + this.value[1] , formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        .then(() => {
          const iframe = this.$refs.Iframe;
          iframe.src = "";
          iframe.src = "http://140.136.155.121:50000/sna_graph/isolation.html";
          this.iframeLoad();
          this.$http
            .post(api + "/isolationcsv", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              })
            .then((response) => {
              this.loading = false;
              console.log(response.data);
              this.isolationData = response.data;
            });
        });
    },
  },
  mounted() {
    this.iframeLoad();
  },
  created() {
    // const api = `https://fju-trans.herokuapp.com`;
    const api = `http://140.136.155.121:50000`;
      
    const formData = new FormData()
    formData.append("token", localStorage.getItem("owner")); // Form userToken
    formData.append("dataset", localStorage.getItem("dataset")); // Form userToken

    this.$http
      .post(api + "/attributes", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        this.attributes = response.data;
      });
  },
};
</script>

<style lang="scss">
.block {
  width: 100%;
  margin-top: 2em;
  display: flex;
  justify-content: center;
  & span {
    margin-top: 0;
  }
}
.analysis-table {
  color: #595959;
  line-height: 1.5;
  font-weight: bold;
  & p {
    text-align: left;
    margin-top: 2em;
  }
  & h1 {
    text-align: left;
    font-size: 2.5em;
    font-weight: bolder;
  }
  & hr {
    height: 5px;
    background: #fc7064;
    border: 0;
    margin-top: 2em;
  }
}

.el-table__cell {
  text-align: center !important;
}
.el-select {
  & span {
    margin-top: 0;
  }
}
.sub-title {
  display: inline-block;
  margin-top: 3em;
}
.ban-title {
  height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // & span{
  //   display: inline-block;
  //   margin-top: 3em;
  // }
}
.select-group {
  width: 30%;
  display: flex;
  justify-content: space-between;
}
.con_flex {
  display: flex;
  justify-content: space-evenly;
  padding: 2em;
}
// .main_sec {
//   padding: 1em 1em;
// }
.iframe_main_sec {
  height: 100vh;
  // padding: 1em 1em;
}
.banner {
  // background: rgb(226, 226, 216);
  height: 60vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-image: url(../assets/greenbg.png);
  background-size: cover;
  background-position: center;
  color: white;
  & h1 {
    font-size: 4em;
    font-weight: bolder;
    letter-spacing: 10px;
    text-indent: 10px;
  }
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 5em 0;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
  height: 92vh;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.basictable {
  width: 100%;
  border: 2px solid #595959;
  font-size: 20px;
  border-radius: 0.45em;

}
.snapic{
  margin: 0 auto;
  border: 2px solid #595959;
  border-radius: 0.45em;

}
.content{
  margin:30px 0;
}
</style>
