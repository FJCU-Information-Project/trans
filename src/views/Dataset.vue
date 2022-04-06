<template>
  <div>
    <Navbar />
    <el-row>
      <el-col :span="24">
        <div class="grid-content man-banner">
          <el-tabs
            stretch="true"
            :tab-position="tabPosition"
            style="height: 100%; width: 100%"
            class="man-tabs"
          >
            <el-tab-pane label="範例資料集">
              <Example />
            </el-tab-pane>
            <el-tab-pane :disabled="!isAuth" label="自訂資料集">
              <Customized v-if="isAuth" />
              <Login v-else />
              <el-alert
                v-if="false"
                title="info alert"
                type="info"
                description="請先登入再使用本系統"
                show-icon
              >
              </el-alert>
            </el-tab-pane>
            <el-tab-pane :disabled="!isAuth" label="歷史紀錄資料">
              <HistoryDataSet v-if="isAuth" />
              <Login v-else />
              <el-alert
                v-if="false"
                title="info alert"
                type="info"
                description="請先登入再使用本系統"
                show-icon
              >
              </el-alert>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Example from "@/views/DatasetExample.vue";
import Customized from "@/views/DatasetCustomized.vue";
//import History from "@/components/History.vue";
import HistoryDataSet from "@/views/HistoryDataSet.vue";
import Login from "@/views/Login.vue";

export default {
  components: {
    Navbar,
    Example,
    Customized,
    //History,
    HistoryDataSet,
    Login,
  },
  data() {
    return {
      tabPosition: "left",
      isAuth: null,
    };
  },
  mounted() {
    this.isAuth = localStorage.getItem("token");
    console.log(this.isAuth);
  },
};
</script>

<style lang="scss">
table {
  font-size: 20px;
}
.el-tabs {
  & .is-active {
    background: #fff;
    color: #fc7064;
    transition: ease-in-out 0.2s all;
  }
  & .el-tabs__active-bar {
    width: 10px !important;
    background: #fc7064;
  }
}
.el-tabs__nav-wrap::after {
  display: none;
}
.el-tabs__item {
  font-size: 1.25em;
  padding: 3em 2em;
  color: white;
}
.el-tabs__item:hover {
  color: black;
  background: #fff;
  transition: ease-in-out 0.2s all;
}
.man-tabs {
  height: 100%;
}
.manage-btn {
  width: 25%;
  display: flex;
  justify-content: space-between;
  // background: #b3c0d1;
  margin-top: 3em;
  & span {
    margin-top: 0;
    font-size: 1.25em;
  }
}
.ban-title {
  // height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.con_flex {
  display: flex;
  justify-content: space-evenly;
  padding: 1.25em 0;
}
.main_sec {
  padding: 1em 1em;
}
.iframe_main_sec {
  height: 100vh;
  padding: 1em 1em;
}
.man-banner {
  // background: rgb(226, 226, 216);
  height: 150vh;
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
</style>
