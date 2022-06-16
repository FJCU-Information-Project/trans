<template>
  <div style="font-size: 20px">
    <el-row>
      <el-col :span="24">
        <div class="grid-content banner">
          <Navbar />
          <div class="ban-title">
            <h1>Overall</h1>
            <span style="font-weight: bolder" class="sub-title">
              呈現網路圖的全貌，並聚焦出核心節點。
            </span>
            <div class="select-group">
              <div class="block">
                <el-select v-model="value" @change="handleChange" placeholder="請選擇一個比率">
                  <el-option
                    v-for="item in ratios"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="con_flex">
      <el-col :span="23" class="analysis-table content">
        <h1>Overall</h1>
        <hr />
        <p>
          顯示出資料集中權重程度前{{ ratio }}的關聯，在網路圖中若形成一個小型網路，代表這些節點在此資料集中為較重要的節點，且通常也是最為核心關鍵的節點。
        </p>
      </el-col>
     
      <el-col :span="11" class="analysis-table snatable">
        <div v-loading="loading" class="grid-content bg-purple main_sec">
          <el-table
            :data="OverallData"
            stripe
            style="width: 100%"
            class="basictable"
            height="860"
          >
            <el-table-column prop="rank" label="排名" />
            <el-table-column prop="total" label="權重" />
            <el-table-column prop="from_id_name" label="起始節點" />
            <el-table-column prop="to_id_name" label="終點節點" />
          </el-table>
        </div>
      </el-col>
      <el-col :span="12" class="snapic">
        <div class="grid-content bg-purple-light iframe_main_sec">
          <iframe ref="Iframe" :src="src" frameborder="0" width="100%" height="100%">
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
  name: "Overall",
  components: {
    Navbar,
  },
  data() {
    return {
      ratios: [
        {
          value: "0.1",
          label: "10%",
        },
        {
          value: "0.2",
          label: "20%",
        },
        {
          value: "0.3",
          label: "30%",
        },
        {
          value: "0.4",
          label: "40%",
        },
        {
          value: "0.5",
          label: "50%",
        },
      ],
      OverallData: [],
      props: {
        expandTrigger: "hover",
      },
      value: "",
      loading: false,
      // src: "https://fju-trans.herokuapp.com/sna_graph/snaRank10.html",
      src: "",
    };
  },
  computed:{
    ratio(){
      if(this.value){
        return `${100*this.value}%`;
      }
      return `一定比例的關聯`;
    }
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

      const formData = new FormData();
      formData.append("token", localStorage.getItem("owner")); // Form token
      formData.append("dataset", localStorage.getItem("dataset")); // Form dataset
      formData.append("ratio", this.value); // Form ratio
      
      this.$http
        .post(api + "/overallReceive", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          const iframe = this.$refs.Iframe;
          iframe.src = "http://140.136.155.121:50000/sna_graph/all.html";
          this.iframeLoad();
          this.$message.success("更新成功");
          this.$http
            .post(api + "/allcsv", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              this.loading = false;
              console.log(response.data);
              this.OverallData = response.data;
              response.data.forEach((item) => {
                this.ranks.push({
                  value: item.rank,
                  label: item.rank,
                });
              });
          });
        })
        .catch((err) => {
          this.$message.error("更新失敗");
          console.log(err);
        });
    },
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
  padding: 1em 1em;
}
.banner {
  // background: rgb(226, 226, 216);
  height: 60vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  // background-image: url(https://images.pexels.com/photos/10003543/pexels-photo-10003543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
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
.el-table {
  // margin-top: 2em;
  border-radius: 0.45em;
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
}
.content{
  margin:30px 0;
}
.snapic{
  margin: 0 auto;
  border: 2px solid #595959;
  border-radius: 0.45em;
}
</style>
