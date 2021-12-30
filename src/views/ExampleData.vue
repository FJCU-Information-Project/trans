<template>
  <div class="grid-content set-banner">
    <el-row class="set-con_flex">
      <el-col :span="18">
        <div class="grid-content set-main_sec">
          <p>範例資料集</p>
          <span>台中市車禍資料集</span>
        </div>
        <router-link :to="{ name: 'Home' }" class="link">
          <el-button round style="margin-top: 4em"
            >進入範例資料集分析</el-button
          >
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "History",
  data() {
    return {
      search: "",
      tableData: [
        {
          time: "2015-05-13",
          type: "Layer Analysis",
          dataset: "預設資料集",
        },
        {
          time: "2016-03-26",
          type: "Degree Analysis",
          dataset: "自訂資料集:台北",
        },
        {
          time: "2013-02-30",
          type: "Layer Analysis",
          dataset: "自訂資料集:高雄",
        },
        {
          time: "2012-01-17",
          type: "Closness Analysis",
          dataset: "預設資料集",
        },
        {
          time: "2013-02-30",
          type: "Layer Analysis",
          dataset: "自訂資料集:高雄",
        },
        {
          time: "2012-01-17",
          type: "Closness Analysis",
          dataset: "預設資料集",
        },
        {
          time: "2013-02-30",
          type: "Layer Analysis",
          dataset: "自訂資料集:高雄",
        },
        {
          time: "2012-01-17",
          type: "Closness Analysis",
          dataset: "預設資料集",
        },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style lang="scss">
.el-table {
  margin-top: 4em;
  border-radius: 0.45em;
}
.el-table__cell {
  text-align: center !important;
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
.his-ban-title {
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
.set-con_flex {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8em 0;
}
.set-main_sec {
  & p {
    display: flex;
    flex-direction: column;
    font-size: 3em;
    font-weight: bolder;
    letter-spacing: 0.5em;
    text-indent: 0.5em;
  }
  & span {
    display: inline-block;
    margin-top: 3em;
    font-size: 1em;
    letter-spacing: 1em;
    text-indent: 1em;
    background: #000;
    padding: 0.5em;
  }
}
.iframe_main_sec {
  height: 100vh;
  padding: 1em 1em;
}
.set-banner {
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  // background-image: url(https://images.pexels.com/photos/10003543/pexels-photo-10003543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  background-size: cover;
  background-position: center;
  color: white;
  // justify-content: center;
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
