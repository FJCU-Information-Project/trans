<template>
  <div style="font-size: 20px">
    <el-row>
      <el-col :span="24">
        <div class="grid-content banner">
          <Navbar />
          <div class="ban-title">
            <h1>Layer Analysis</h1>
            <span style="font-weight: bolder" class="sub-title">
              請選擇您想分析的中心節點及階層，我們將會為您呈現中心節點向外發散的層級關係點層級
            </span>
            <div class="select-group">
              <div class="block">
                <!-- <span class="demonstration">Child options expand when hovered</span> -->
                <el-cascader
                  v-model="value"
                  :options="attributes"
                  :props="props"
                  @change="handleChange"
                  placeholder="請選擇起始節點"
                ></el-cascader>
              </div>
              <div class="block">
                <el-select
                  v-model="layerValue"
                  placeholder="請選擇層級"
                  @change="layerChange"
                >
                  <el-option
                    v-for="item in tableData"
                    :key="item.id"
                    :label="item.node"
                    :value="item.node"
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
        <h1>Layer Analysis</h1>
        <hr />
        <p>
          使用者選擇一個肇事因素做為中心起始節點，從起始節點發散並展開來檢視第一層、第二層的關聯節點分析，並呈現以該起始節點為中心所分析的第一層網路圖，再進一步以第一層的節點作為起始點，各自發散出第二層的網路圖
        </p>
         </el-col>
        <el-col :span="11" class="analysis-table snatable">
        <div v-loading="loading" class="grid-content bg-purple main_sec">
          <el-table
            :data="layerData"
            stripe
            style="width: 100%"
            class="basictable"
            height="860"
          >
            <el-table-column prop="second_name" label="起始節點" />
            <el-table-column prop="group" label="第一層節點" />
            <el-table-column prop="group" label="第一層權重" />
            <el-table-column prop="group" label="第二層節點" />
            <el-table-column prop="group" label="第二層權重" />
            <el-table-column prop="group" label="總權重" />
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
          </iframe>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "LayerAnalysis",
  components: {
    Navbar,
  },
  data() {
    return {
      value: "",
      attributes: [],
      layerData: [],
      tableData: [
        {
          id: "0",
          node: "起始點",
        },
        {
          id: "1",
          node: "第1層",
        },
        {
          id: "2",
          node: "第2層",
        },
      ],
      layerValue: "",
      props: {
        expandTrigger: "hover",
      },
      loading: false,
      // src: "https://fju-trans.herokuapp.com/sna_graph/layer.html",
      // src: "http://140.136.155.121:50000/sna_graph/layer.html",
      src: "http://140.136.155.121:50000/sna_graph/layer.html",
      // src: "http://140.136.155.121:8080",
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
      // const api = `http://140.136.155.121:50000`;
      const api = `http://140.136.155.121:50000`;

      const formData = new FormData()
      formData.append("token", localStorage.getItem("owner")); // Form userToken
      formData.append("dataset", localStorage.getItem("dataset")); // Form userToken

      this.$http
        .post(api + "/layerReceive?node=" + this.value[1], formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          const iframe = this.$refs.Iframe;
          const tempSrc = iframe.src;
          iframe.src = tempSrc;
          this.iframeLoad();
          this.$http
            .post(api + "/layercsv", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
              this.loading = false;
              console.log(response.data);
              this.layerData = response.data;
            });
        });
    },
    layerChange() {
      this.loading = true;
      // const api = `https://fju-trans.herokuapp.com`;
      // const api = `http://140.136.155.121:50000`;
      const api = `http://140.136.155.121:50000`;

      const formData = new FormData()
      formData.append("token", localStorage.getItem("owner")); // Form userToken
      formData.append("dataset", localStorage.getItem("dataset")); // Form userToken


      this.$http
        .post(api + "/layerReceive?node=" + this.value[1], formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          const iframe = this.$refs.Iframe;
          const tempSrc = iframe.src;
          iframe.src = tempSrc;
          this.iframeLoad();
          this.$http
          .post(api + "/layercsv", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            this.loading = false;
            console.log(response.data);
            this.layerData = response.data
              .map((value) => {
                if (value.group === this.layerValue) {
                  return value;
                }
              })
              .filter((item) => item);
          });
        });
    },
  },
  mounted() {
    this.iframeLoad();
  },
  created() {
    console.log("created");
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
.el-select {
  & span {
    margin-top: 0 !important;
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
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 2em;
}
.con_flex {
  display: flex;
  justify-content: space-evenly;
  padding: 2em;
}
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
}
.snatable{
  margin-left: 30px;
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
