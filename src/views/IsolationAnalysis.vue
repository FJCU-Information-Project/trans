<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content banner">
          <Navbar />
          <div class="ban-title">
            <h1>Isolation Analysis</h1>
            <span style="font-weight: bolder" class="sub-title">
              此分析我們將為您呈現整個網路圖中被孤立的節點
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
      <el-col :span="11" class="analysis-table">
        <h1>Isolation Analysis</h1>
        <hr />
        <p>使用者透過此分析的 SNA 圖可得知在該資料集中並非造成車禍發生的因素節點。其中表格中所顯示的關聯組合皆為相同的起始因素節點，而其每一組組合的權重皆為0，亦可解釋為「在該資料集中並沒有出現過的關聯組合」。</p>
        <br>
        <!--
          <el-card class="box-card" v-if="value !== ''">
          <div class="card-header">
            <span>起始節點:</span>
            <span>{{isolationData[0].from_id_name}}</span>
          </div>
        </el-card>
        -->
        <div v-loading="loading" class="grid-content bg-purple main_sec">
          <el-table :data="isolationData" stripe style="width: 100%">
            <el-table-column prop="from_id_name" label="起始節點" />
            <el-table-column prop="to_id_name" label="終點節點" />
            <el-table-column prop="total" label="權重值" />
          </el-table>
        </div>
      </el-col>
      <el-col :span="12">
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
      attributes: [
      
      ],
      value: "",
      isolationData: [
        
      ],
      tableData: [
      ],
      props: {
        expandTrigger: "hover",
      },
      loading: false,
      src: "http://localhost:5000/sna_graph/isolation.html",
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
    handleChange(){
      this.loading = true;
      // const api = `https://fju-trans.herokuapp.com`;
      const api = `http://localhost:5000`;
      this.$http.get(api+"/isolationReceive?node="+this.value[1]).then(() => {
        const iframe = this.$refs.Iframe;
        const tempSrc = iframe.src;
        iframe.src = tempSrc;
        this.iframeLoad();
        this.$http.get(api+"/isolationcsv").then((response) => {
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
    const api = `http://localhost:5000`;
    this.$http.get(api + "/attributes").then((response) => {
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
</style>
