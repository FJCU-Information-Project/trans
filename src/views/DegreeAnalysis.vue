<template>
  <el-row class="close">
    <el-col :span="24">
      <div class="grid-content banner">
        <Navbar />
        <div class="ban-title">
          <h1>Degree Analysis</h1>
          <span style="font-weight: bolder" class="sub-title">
            請選取一個您感興趣的節點，我們將會為您分析出此節點有幾個關聯
          </span>
          <div class="select-group">
            <el-select v-model="value" placeholder="請選擇節點">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
  <el-row class="con_flex">
    <el-col :span="11">
      <div class="grid-content bg-purple main_sec">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="No" label="No" width="180" />
          <el-table-column prop="To_id" label="To_id" width="180" />
          <el-table-column prop="To_id_name" label="To_id_name" />
          <el-table-column prop="Weight" label="Weight" />
        </el-table>
      </div>
    </el-col>
    <el-col :span="9" class="analysis-table">
      <h1>Degree Analysis</h1>
      <hr />
      <p>此處為分析功能之說明</p>
    </el-col>
  </el-row>
  <!--<el-footer>Footer</el-footer>-->
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "DegreeAnalysis",
  components: {
    Navbar,
  },
  data() {
    return {
      tableData: [
        {
          No: "1",
          To_id: "1",
          To_id_name: "晴",
          Weight: "2500",
        },
        {
          No: "1",
          To_id: "1",
          To_id_name: "晴",
          Weight: "2500",
        },
        {
          No: "1",
          To_id: "1",
          To_id_name: "晴",
          Weight: "2500",
        },
        {
          No: "1",
          To_id: "1",
          To_id_name: "晴",
          Weight: "2500",
        },
        {
          No: "1",
          To_id: "1",
          To_id_name: "晴",
          Weight: "2500",
        },
        {
          No: "1",
          To_id: "1",
          To_id_name: "晴",
          Weight: "2500",
        },
        {
          No: "1",
          To_id: "1",
          To_id_name: "晴",
          Weight: "2500",
        },
        {
          No: "1",
          To_id: "1",
          To_id_name: "晴",
          Weight: "2500",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
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
</style>
