<template>
  <div style="font-size: 20px">
    <el-row class="close">
      <el-col :span="24">
        <div class="grid-content banner">
          <Navbar />
          <div class="ban-title">
            <h1>Closeness Analysis</h1>
            <span style="font-weight: bolder" class="sub-title">
              請選取一個您感興趣的節點，我們將會為您分析出此節點有幾種關聯
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
      <el-col :span="11">
        <div class="grid-content main_sec">
          <el-table :data="closenessData" stripe style="width: 100%">
            <el-table-column prop="from_id" label="肇事因素編號" width="180" />
            <el-table-column
              prop="from_id_name"
              label="肇事因素名稱"
              width="180"
            />
            <el-table-column prop="weight" label="Closeness Centrality" />
          </el-table>
        </div>
      </el-col>
      <el-col :span="9" class="analysis-table">
        <h1>Closeness Analysis</h1>
        <hr />
        <p>
          使用者選擇一個肇事因素做為中心起始節點，透過分析起始節點與周遭其他節點，找出與該節點擁有幾種不同的關聯
        </p>
        <br />
        <iframe
          ref="Iframe"
          :src="src"
          frameborder="0"
          width="100%"
          height="100%"
        >
          <!-- 社會網路圖 -->
        </iframe>
      </el-col>
    </el-row>
    <!--<el-footer>Footer</el-footer>-->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "ClosenessAnalysis",
  components: {
    Navbar,
  },
  data() {
    return {
      attributes: [],
      closenessData: [],
      tableData: [
        {
          No: "1",
          To_id: "1",
          To_id_name: "晴",
          Weight: "2500",
        },
        {
          No: "2",
          To_id: "1",
          To_id_name: "晴",
          Weight: "2500",
        },
        {
          No: "3",
          To_id: "1",
          To_id_name: "晴",
          Weight: "2500",
        },
      ],
      props: {
        expandTrigger: "hover",
      },
      value: "",
      loading: false,
      // src: "https://fju-trans.herokuapp.com/sna_graph/snaRank10.html",
      src: "http://140.136.155.121:50000/sna_graph/closeness.html",
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
      this.$http
        .get(api + "/closenessReceive?node=" + this.value[1])
        .then(() => {
          const iframe = this.$refs.Iframe;
          const tempSrc = iframe.src;
          iframe.src = tempSrc;
          this.iframeLoad();
          this.$http.get(api + "/closenesscsv").then((response) => {
            this.loading = false;
            console.log(response.data);
            this.closenessData = response.data;
          });
        });
    },
  },
  created() {
    // const api = `https://fju-trans.herokuapp.com`;
    const api = `http://140.136.155.121:50000`;
    this.$http.get(api + "/attributes").then((response) => {
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
.el-select {
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
.ban-title {
  height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.close {
  margin-bottom: 0;
}
.con_flex {
  display: flex;
  justify-content: space-evenly;
  padding: 3em 0;
  // background-image: url(https://images.pexels.com/photos/3322471/pexels-photo-3322471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
}
.main_sec {
  padding: 1em 1em;
}
.iframe_main_sec {
  // height: 100vh;
  padding: 1em 1em;
  background: #fff;
  margin-top: 10em;
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
