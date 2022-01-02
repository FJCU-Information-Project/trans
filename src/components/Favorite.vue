<template>
  <div class="grid-content his-banner">
    <el-row class="his-con_flex">
      <el-col :span="18">
        <div class="grid-content main_sec">
          <el-table
            :data="
              tableData.filter(
                (data) =>
                  !search ||
                  data.time.toLowerCase().includes(search.toLowerCase())
              )
            "
            style="width: 100%"
          >
            <el-table-column label="新增日期" prop="date" />
            <el-table-column label="資料集名稱" prop="name" />
            <el-table-column label="說明" prop="describe" />
            <el-table-column align="right">
              <template #header>
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="請輸入要尋找的日期"
                />
              </template>
              <template #default="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                  >查看</el-button
                >
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  >刪除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ElMessageBox } from "element-plus";

export default {
  name: "History",
  data() {
    return {
      search: "",
      tableData: [
        {
          date: "2021-07-16",
          describe: "None",
          name: "台中市車禍資料",
        },
        {
          date: "2021-07-16",
          describe: "None",
          name: "台中市車禍資料",
        },
        {
          date: "2021-07-16",
          describe: "None",
          name: "台中市車禍資料",
        },
        {
          date: "2021-07-16",
          describe: "None",
          name: "台中市車禍資料",
        },
        {
          date: "2021-07-16",
          describe: "None",
          name: "台中市車禍資料",
        },
        {
          date: "2021-07-16",
          describe: "None",
          name: "台中市車禍資料",
        },
        {
          date: "2021-07-16",
          describe: "None",
          name: "台中市車禍資料",
        },
        {
          date: "2021-07-16",
          describe: "None",
          name: "台中市車禍資料",
        },
        // {
        //   time: "2015-05-13",
        //   type: "Layer Analysis",
        //   dataset: "預設資料集",
        // },
        // {
        //   time: "2016-03-26",
        //   type: "Degree Analysis",
        //   dataset: "自訂資料集:台北",
        // },
        // {
        //   time: "2013-02-30",
        //   type: "Layer Analysis",
        //   dataset: "自訂資料集:高雄",
        // },
        // {
        //   time: "2012-01-17",
        //   type: "Closness Analysis",
        //   dataset: "預設資料集",
        // },
        // {
        //   time: "2013-02-30",
        //   type: "Layer Analysis",
        //   dataset: "自訂資料集:高雄",
        // },
        // {
        //   time: "2012-01-17",
        //   type: "Closness Analysis",
        //   dataset: "預設資料集",
        // },
        // {
        //   time: "2013-02-30",
        //   type: "Layer Analysis",
        //   dataset: "自訂資料集:高雄",
        // },
        // {
        //   time: "2012-01-17",
        //   type: "Closness Analysis",
        //   dataset: "預設資料集",
        // },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      ElMessageBox.alert(
        '<div class="grid-content bg-purple-light iframe_main_sec"><iframe src="/snaRank10.html" frameborder="0" width="100%" height="100%"></iframe></div>',
        {
          dangerouslyUseHTMLString: true,
        }
      );
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
.el-table {
  margin-top: 4em;
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
.his-con_flex {
  display: flex;
  justify-content: center;
  padding: 1.25em 0;
}
.main_sec {
  padding: 1em 1em;
}
.iframe_main_sec {
  height: 100vh;
  padding: 1em 1em;
}
.his-banner {
  // background: rgb(226, 226, 216);
  height: 200vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  // background-image: url(https://images.pexels.com/photos/10003543/pexels-photo-10003543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
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
