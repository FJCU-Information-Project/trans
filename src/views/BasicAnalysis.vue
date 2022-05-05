<template>
  <div style="font-size: 20px">
    <el-row class="close">
      <el-col :span="24">
        <div class="grid-content banner">
          <Navbar />
          <div class="ban-title">
            <h1>Basic Analysis</h1>
            <span style="font-weight: bolder" class="sub-title">
              以社會網路分析(Social Network Analysis, SNA)的基本理論來分析資料集。
            </span>
          </div>
        </div>
      </el-col>
    </el-row>

    <!--tabs start-->
    <!-- Tab Section With ID attribute Start -->
    <div class="container">
      <div class="prodBody">
        <!--degree analysis start-->
        <div class="prodMain active" id="pTab1C">
          <el-row class="con_flex">
            <el-col :span="23" class="analysis-table content">
              <h1>Basic Analysis</h1>
              <hr />
              <p>
                系統針對整個資料集中的肇事因素進行集中點分析與核心點分析，計算出各節點的Degree Centrality和Closeness Centrality，並藉由選取特定節點看出該節點與哪些節點有關聯。<br>
	Degree Centrality數值較高的節點，通常也是權重總數較高的節點，因此可推斷其為較常出現的節點，換言之，就是較常發生車禍的關鍵因素之一。<br>
	Closeness Centrality 數值較高的節點，通常也是具有較多組關聯組合的節點，因此可推斷其為較常伴隨其他因素出現的節點，換言之，就是較常與其他肇事因素一起發生的核心因素之一。<br>

              </p>
            </el-col>
            <el-col :span="11" class="analysis-table snatable">
              <div v-loading="loadingcsv" class="grid-content bg-purple main_sec">
                <el-table :data="basicData" stripe class="basictable" height="820">
                  <el-table-column prop="node_name" label="節點名稱" />
                  <el-table-column
                    prop="degree_centrality"
                    label="集中度"
                    sortable
                  />
                  <el-table-column
                    prop="closeness_centrality"
                    label="核心度"
                    sortable
                    />
                    <el-table-column label="查看網路圖">
                    <template #default="scope">
                      <el-button
                        size="small"
                        @click="checkRank(scope.$index, scope.row)"
                        >查看</el-button
                      >
                    </template>
                  </el-table-column>
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
      </div>
    </div>
    <!-- Tab Section With ID attribute End -->
    <!--tab end-->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "basicAnalysis",
  components: {
    Navbar,
  },
  data() {
    return {
      attributes: [],
      value: "",
      ranks: [],
      basicData: [],
      rank: "",
      tableData: [],
      props: {
        expandTrigger: "hover",
      },
      loading: false,
      loadingcsv: false,
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
    checkRank(index, rowItem) {
      console.log(rowItem.node_id);
      //const api = `https://fju-trans.herokuapp.com`;
      const api = `http://140.136.155.121:50000`;
      
      this.loading = true;
      const formData = new FormData()
      formData.append("token", localStorage.getItem("owner")); // Form userToken
      formData.append("dataset", localStorage.getItem("dataset")); // Form userToken
      formData.append("node", rowItem.node_id); // Form userToken
      this.$http
        .post(
          api +
            "/basicReceive"
          , formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(() => {
          const iframe = this.$refs.Iframe;
          iframe.src = "http://140.136.155.121:50000/sna_graph/basic.html";
          this.iframeLoad();
        });
    },
  },
  created() {
    // const api = `https://fju-trans.herokuapp.com`;
    const api = `http://140.136.155.121:50000`;      
    
    this.loading = true;
    this.loadingcsv = true;
    const formData = new FormData()
    formData.append("token", localStorage.getItem("owner")); // Form userToken
    formData.append("dataset", localStorage.getItem("dataset")); // Form userToken

    this.$http
      .post(api + "/basicReceive", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        this.$http
          .post(api + "/basiccsv", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.log(response.data);
            this.basicData = response.data;
            this.loading = false;
            this.loadingcsv = false;
          });
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

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

* {
  margin: 0;
  padding: 0;
}

.container {
  // max-width: 850px;
  margin: 0 auto;
  padding: 50px;
}

.prodNav {
  font-size: 12px;
  background: #f5f5f5;
  border-radius: 20px;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  margin: 50px 0 20px;
  line-height: 1.1;
}
.prodNav .ptItem {
  padding: 9px 35px;
  line-height: 20px;
  border-radius: 20px;
  border: 1px solid transparent;
  font-weight: 500;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  transition: all 0.3s ease-in-out;
}

.prodNav .ptItem.active,
.prodNav .ptItem:hover {
  background: #10afafca;
  border-color: #10afafca;
  color: #ffffff;
  font-size: 20px;
}

.prodBody {
  //border: 1px solid #c1c1c1;
  // padding: 20px;
  border-radius: 5px;
}

.prodMain {
  display: none;
  // padding: 20px;
  color: #595959;
  line-height: 1.5;
  font-weight: bold;
}

.prodMain.active {
  display: block;
}

// #pTab1C {
//   background: #f0e19f;
// }
#pTab2C {
  background: #98c6fa;
}

#pTab3C {
  background: #249ef0;
}
.basictable {
  width: 100%;
  border: 2px solid #595959;
  font-size: 20px;
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
