<template>
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
                ></el-cascader>
              </div>
            <el-select v-model="tableValue" placeholder="請選擇層級">
              <el-option
                v-for="item in tableData"
                :key="item.id"
                :label="item.node"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
  <el-row class="con_flex">
    <el-col :span="9" class="analysis-table">
      <h1>Layer Analysis</h1>
      <hr />
      <p>此處為分析功能之說明</p>
      <div
        v-loading="loading"
        class="grid-content bg-purple main_sec"
      >
        <el-table :data="layerData" stripe style="width: 100%">
          <el-table-column
            prop="factorRank"
            label="關聯肇事因素排名"
            width="180"
          />
          <el-table-column prop="factor" label="肇事因素" width="180" />
          <el-table-column prop="caseNumber" label="案件總數" />
        </el-table>
      </div>
    </el-col>
    <el-col :span="14">
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
      attributes: [],
      layerData: [],
      tableData: [
        {
          id: "1",
          node: "第一層",
        },
        {
          id: "2",
          node: "第二層",
        },
      ],
      value: "",
      layerValue: "",
      props: {
        expandTrigger: "hover",
      },
      loading: false,
      //src: "https://fju-trans.herokuapp.com/sna_graph/snaRank10.html",
      src: "http://localhost:5000/sna_graph/snaRank10.html",
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
      const api = `https://fju-trans.herokuapp.com`;
      //const api = `http://localhost:5000`;
      this.$http.get(api+"/receive?node="+this.value[1]).then(() => {
        const iframe = this.$refs.Iframe;
        const tempSrc = iframe.src;
        iframe.src = tempSrc;
        this.iframeLoad();
      });
      this.$http.get(api+"/csv").then((response) => {
        this.loading = false;
        console.log(response.data);
        this.layerData = response.data;
      });
    },
  },
  mounted() {
    this.iframeLoad();
  },
  created() {
    console.log("created");
    const api = `https://fju-trans.herokuapp.com`;
    //const api = `http://localhost:5000`;
    this.$http.get(api+"/attributes").then((response) => {
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
  margin-top: 2em;
  border-radius: 0.45em;
}
.el-table__cell {
  text-align: center !important;
}
.analysis-table {
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
  width: 30%;
  display: flex;
  justify-content: space-between;
  margin-top: 4em;
}
.con_flex {
  display: flex;
  justify-content: space-evenly;
  padding: 5em 2em;
}
.iframe_main_sec {
  height: 100vh;
  padding: 1em 1em;
}
.banner {
  // background: rgb(226, 226, 216);
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-image: url(https://images.pexels.com/photos/10003543/pexels-photo-10003543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
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
</style>
