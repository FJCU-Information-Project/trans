<template>
  <div>
    <el-row class="close">
      <el-col :span="24">
        <div class="grid-content banner">
          <Navbar />
          <div class="ban-title">
            <h1>Result Analysis</h1>
            <span style="font-weight: bolder" class="sub-title">
              請選擇事故結果，我們將為您分析出哪些節點組合最容易造成此結果的產生，並加以排名
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
                <!-- <span class="demonstration">Child options expand when hovered</span>
                <el-cascader
                  v-model="rank"
                  :options="ranks"
                  :props="props"
                  @change="rankChange"
                  placeholder="請選擇Rank(預設為1)"
                ></el-cascader> -->
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="con_flex">
      <el-col :span="9" class="analysis-table">
        <h1>Result Analysis</h1>
        <hr />
        <p>使用者先選擇事故結果(例如：受傷程度、主要傷處、車輛撞擊部位），藉由該節點做SNA的集中點（Degree Centrality）分析，找出肇事因素跟車禍案件結果關聯的高低，哪些節點組合最容易造成此結果並對其進行排名<br><br>在本系統中，使用者可以藉由排名結果，得知造成車禍致死的關鍵因素，也能配合受傷程度屬性關聯，得出可能造成的死傷結果，來幫助其觀察分析結果，進而避免高致死率的肇事因素發生</p>
        <div class="grid-content bg-purple main_sec">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="rank" label="權重排名" />
            <el-table-column prop="from_id_name" label="起始節點名稱"/>
            <el-table-column prop="to_id_name" label="終點節點名稱" />
            <el-table-column prop="total" label="權重" />
            <el-table-column label="查看SNA圖">
              <template #default="scope">
                <el-button size="small" @click="checkRank(scope.$index, scope.row)"
                  >查看</el-button
                >
              </template>
            </el-table-column>
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
      tableData: [
        {
          from_id: "139",
          from_id_name: "無缺陷",
          rank: "1",
          to_id: "184",
          to_id_name: "無繪設快慢車道分隔線",
          total: "21774",
        },
      ],
      props: {
        expandTrigger: "hover",
      },
      loading: false,
      src: "http://localhost:50000/sna_graph/result.html",
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
      const api = `http://localhost:50000`;
      this.loading = true;
      this.$http
        .get(api + "/resultReceive?node=" + this.attributes[parseInt(this.value[0])-1].label + "&rank=1")
        .then(() => {
          const iframe = this.$refs.Iframe;
          const tempSrc = iframe.src;
          iframe.src = tempSrc;
          this.iframeLoad();
          this.$http
            .get(api+"/resultcsv")
            .then((response) => {
              this.loading = false;
              console.log(response.data);
              this.tableData = response.data;
              response.data.forEach((item) => {
                this.ranks.push({
                  "value": item.rank,
                  "label": item.rank,
                });
              });
            });
        });
    },
    checkRank(index,rowItem) {
      console.log(rowItem);
      //const api = `https://fju-trans.herokuapp.com`;
      const api = `http://localhost:50000`;
      this.$http
        .get(api + "/resultReceive?node=" + this.attributes[parseInt(this.value[0])-1].label + "&rank=" + (parseInt(index)+1))
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
    const api = `http://localhost:50000`;
    this.$http.get(api + "/resultAttributes").then((response) => {
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
  padding: 5em 2em;
  // background-image: url(https://images.pexels.com/photos/10481158/pexels-photo-10481158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
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
.select-group {
  justify-content: center;
  margin-top: 4em;
}
</style>
