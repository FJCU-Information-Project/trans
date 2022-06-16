<template>
  <div style="font-size: 20px">
    <el-row class="close">
      <el-col :span="24">
        <div class="grid-content banner">
          <Navbar />
          <div class="ban-title">
            <h1>Factor Rank Analysis</h1>
            <span style="font-weight: bolder" class="sub-title">
              以某肇事因素為條件，呈現出與該肇事因素同時發生之前百分之十的因素節點和排名。
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
        <h1>Factor Rank Analysis</h1>
        <hr />
        <p>
          系統將針對所選的肇事因素，找出與此因素相關聯的肇事因素節點，並透過關聯權重大小進行排名，進一步列出前10%筆的資料，再以網路圖呈現出整體該組合關聯的分布情形。<br /><br />
          權重較大且排名較高的關聯組合，代表該組合的肇事因素在是經常出現的，且通常也是該肇事因素最為核心關鍵的肇事因素組合。關聯組合權重越高，網路圖中呈現的關聯線條越粗、肇事因素節點越大。
        </p>
        </el-col>
        <el-col :span="11" class="analysis-table snatable ">
        <div class="grid-content bg-purple main_sec">
          <el-table
            v-loading="loading"
            :data="factorRankData"
            stripe
            style="width: 100%"
            class="basictable"
            height="860"
          >
            <el-table-column prop="factorRank" label="排名" />
            <el-table-column prop="caseWeight" label="權重" />
            <el-table-column prop="factor" label="節點名稱" />
            <!-- <el-table-column prop="factor" label="與起始點關聯之肇事因素" /> -->
          </el-table>
        </div>
      </el-col>
      <el-col :span="12" class="snapic">
        <div v-loading="loading" class="grid-content bg-purple-light iframe_main_sec">
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
  name: "ResultAnalysis",
  components: {
    Navbar,
  },
  data() {
    return {
      attributes: [],
      factorRankData: [],
      tableData: [],
      props: {
        expandTrigger: "hover",
      },
      value: "",
      loading: false,
      // src: "https://fju-trans.herokuapp.com/sna_graph/snaRank10.html",
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
      //const api = `https://fju-trans.herokuapp.com`;
      const api = `http://140.136.155.121:50000`;
      
      const formData = new FormData()
      formData.append("token", localStorage.getItem("owner")); // Form userToken
      formData.append("dataset", localStorage.getItem("dataset")); // Form userToken
      formData.append("node", this.value[1]); // Form node

      this.$http
        .post(api + "/factorRankReceive" , formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          const iframe = this.$refs.Iframe;
          iframe.src = "";
          iframe.src = "http://140.136.155.121:50000/sna_graph/snaRank10.html";
          this.iframeLoad();
          this.$http
            .post(api + "/factorRankcsv", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              })
            .then((response) => {
              this.loading = false;
              console.log(response.data);
              this.factorRankData = response.data;
            });
        });
    },
  },

  created() {
    //const api = `https://fju-trans.herokuapp.com`;
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
  margin-top: 2em;
  & span {
    margin-top: 0;
  }
}
.el-table {
  // margin-top: 2em;
  border-radius: 0.45em;
}
.el-table__cell {
  text-align: center !important;
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
.close {
  margin-bottom: 0 !important;
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
.con_flex {
  display: flex;
  justify-content: space-evenly;
  padding: 2em;
  // background-image: url(https://images.pexels.com/photos/10481158/pexels-photo-10481158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
}
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
.select-group {
  justify-content: center;
}
.basictable {
  width: 100%;
  border: 2px solid #595959;
  font-size: 20px;
}
.content{
  margin:30px 0;
}
.snapic{
  margin: 0 auto;
  border: 2px solid #595959;
  border-radius: 0.45em;
}
.snatable{
  margin-left: 30px;
}
</style>
