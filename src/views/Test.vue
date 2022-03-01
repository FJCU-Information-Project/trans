<template>
<div>
  <el-row class="close">
    <el-col :span="24">
      <Navbar />
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
    </el-col>
  </el-row>
  <el-row class="con_flex">
    <el-col :span="10">
      <div class="grid-content bg-purple main_sec">
        <el-table :data="degreeData" stripe style="width: 100%">
          <el-table-column prop="from_id" label="肇事因素編號" width="200" />
          <el-table-column prop="from_id_name" label="肇事因素名稱" width="200" />
          <el-table-column prop="SUM..total.." label="Degree Centrality" />
        </el-table>
      </div>
    </el-col>
    <el-col :span="9" class="analysis-table">
      <h1>Test Analysis</h1>
      <hr />
      <div id="mynetwork"></div>
    </el-col>
  </el-row>
  <!--<el-footer>Footer</el-footer>-->
</div>
</template>

<script>
import { DataSet, Network } from "vis";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "DegreeAnalysis",
  components: {
    Navbar,
  },
  data() {
    return {
      network: null,
      attributes: [
      
      ],
      degreeData: [
        
      ],
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
      ],
      props: {
        expandTrigger: "hover",
      },
      value: "",
      loading: false,
      // src: "https://fju-trans.herokuapp.com/sna_graph/snaRank10.html",
      src: "http://localhost:5000/sna_graph/degree.html",
    };
  },
  methods:{
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
    handleChange(){
      this.loading = true;
      //const api = `https://fju-trans.herokuapp.com`;
      const api = `http://localhost:5000`;
      this.$http.get(api+"/degreeReceive?node="+this.value[1]).then(() => {
        const iframe = this.$refs.Iframe;
        const tempSrc = iframe.src;
        iframe.src = tempSrc;
        this.iframeLoad();
        this.$http.get(api+"/degreecsv").then((response) => {
          this.loading = false;
          console.log(response.data);
          this.degreeData = response.data;
        });
      });
    },
  },
  created() {
    // const api = `https://fju-trans.herokuapp.com`;
    const api = `http://localhost:5000`;
    this.$http.get(api + "/attributes").then((response) => {
      console.log(response.data);
      this.attributes = response.data;
    });
  },
  mounted() {
    let nodes = new DataSet([
      { id: 1, label: "Node 1" },
      { id: 2, label: "Node 2" },
      { id: 3, label: "Node 3" },
      { id: 4, label: "Node 4" },
      { id: 5, label: "Node 5" },
    ]);
    console.log(nodes);
    let edges = new DataSet([
      { id: 1, from: 1, to: 3 },
      { id: 2, from: 1, to: 2 },
      { id: 3, from: 2, to: 4 },
      { id: 4, from: 2, to: 5 },
      { id: 5, from: 3, to: 3 },
    ]);
    console.log(edges);
    let container = document.getElementById("mynetwork");
    let data = {
      nodes: nodes,
      edges: edges,
    };
    let options = {};
    this.network = new Network(container, data, options);
  },
};
</script>

<style lang="scss">
.block {
  margin-top: 2em;
  display: flex;
  justify-content: center;
  & span {
    margin-top: 0;
  }
}
.el-select {
  & span {
    margin-top: 0;
  }
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
.el-table {
  margin-top: 0;
  border-radius: 0.45em;
}
.close {
  margin-bottom: 0 !important;
}
.ban-title {
  height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.con_flex {
  display: flex;
  justify-content: space-evenly;
  padding: 5em 2em;
}
.main_sec {
  padding: 1em 1em;
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
#mynetwork {
  width: 600px;
  height: 400px;
  border: 1px solid lightgray;
}
</style>
