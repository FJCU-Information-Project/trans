<template>
  <div style="font-size: 20px">
    <el-row class="close">
      <el-col :span="24">
        <div class="grid-content banner">
          <Navbar />
          <div class="ban-title">
            <h1>Result Analysis</h1>
            <span style="font-weight: bolder" class="sub-title">
              以某肇事結果為條件，呈現出易造成該結果的肇事因素關聯組合。
            </span>
            <div class="select-group">
              <div class="block">
                <!-- <span class="demonstration">Child options expand when hovered</span> -->
                <el-cascader
                  v-model="value"
                  :options="attributes"
                  :props="props"
                  @change="nodeChange"
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
        <h1>Result Analysis</h1>
        <hr />
        <p>
          系統將針對所選的肇事結果，找出符合該肇事結果的肇事因素組合，透過權重大小進行排名，進一步列出前1%筆的資料，同時，完成網路圖的呈現。<br>
          權重較大的關聯組合，代表該組合的肇事因素在此資料集中是經常出現的，且通常也是最為核心關鍵的肇事因素組合。<br>
        </p>
      </el-col>
      <el-col :span="11" class="analysis-table snatable">
        <div v-loading="loading" class="grid-content bg-purple main_sec">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%"
            class="basictable"
            height="820"
          >
            <el-table-column prop="rank" label="排名" />
            <el-table-column prop="total" label="權重" />
            <el-table-column
              prop="from_id_name"
              label="起始節點"
            />
            <el-table-column prop="to_id_name" label="終點節點" />
            <!-- <el-table-column label="查看SNA圖">
              <template #default="scope">
                <el-button
                  size="medium"
                  @click="checkRank(scope.$index, scope.row)"
                  type="warning" plain
                  ><i class="el-icon-view"></i> 查看</el-button
                >
              </template>
            </el-table-column> -->
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
  name: "ResultAnalysis",
  components: {
    Navbar,
  },
  data() {
    return {
      attributes: [],
      value: "",
      ranks: [],
      rank: "",
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
    nodeChange() {
      //const api = `https://fju-trans.herokuapp.com`;
      const api = `http://140.136.155.121:50000`;
      this.loading = true;
        
      const formData = new FormData();
      formData.append("token", localStorage.getItem("owner")); // Form userToken
      formData.append("dataset", localStorage.getItem("dataset")); // Form userToken

      this.$http
        .post(
          api +
            "/resultReceive?node=" + this.value[1]
        , formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          const iframe = this.$refs.Iframe;
          iframe.src = "";
          iframe.src = "http://140.136.155.121:50000/sna_graph/result.html";
          this.iframeLoad();
          this.$http
            .post(api + "/resultcsv", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              this.loading = false;
              console.log(response.data);
              this.tableData = response.data;
              response.data.forEach((item) => {
                this.ranks.push({
                  value: item.rank,
                  label: item.rank,
                });
              });
          });
        });
    },
    checkRank(index, rowItem) {
      console.log(rowItem);
      //const api = `https://fju-trans.herokuapp.com`;
      const api = `http://140.136.155.121:50000`;
      
      const formData = new FormData()
      formData.append("token", localStorage.getItem("owner")); // Form userToken
      formData.append("dataset", localStorage.getItem("dataset")); // Form userToken

      this.$http
        .post(
          api +
            "/resultReceive?node=" +
            this.attributes[parseInt(this.value[0]) - 1].label +
            "&rank=" +
            (parseInt(index) + 1)
          , formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(() => {
          const iframe = this.$refs.Iframe;
          const tempSrc = iframe.src;
          iframe.src = tempSrc;
          this.iframeLoad();
        });
    },
  },
  created() {
    // const api = `https://fju-trans.herokuapp.com`;
    const api = `http://140.136.155.121:50000`; 
    
    const formData = new FormData()
    formData.append("token", localStorage.getItem("owner")); // Form userToken
    formData.append("dataset", localStorage.getItem("dataset")); // Form userToken

    this.$http
      .post(api + "/resultAttributes", formData, {
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
  // padding: 5em 2em;
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
.basictable {
  width: 100%;
  border: 2px solid #595959;
  font-size: 20px;
}
.snapic{
  margin: 0 auto;
  border: 2px solid #595959;
  // margin-bottom: 50px;

  // margin-top: 58px;
  border-radius: 0.45em;

}
.snatable{
  margin-left: 30px;
}
.content{
  margin:30px 0;
}
</style>
