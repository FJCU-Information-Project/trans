<template>
  <div class="grid-content his-banner">
    <el-row class="cusdata-con_flex">
      <el-col :span="23">
        <div class="grid-content cos_main_sec">
          <div style="display: flex; justify-content: center">
            <p><i class="el-icon-document"></i>歷史紀錄資料</p>
          </div>
          <el-table
            :data="
              tableData.filter(
                (data) =>
                  !search ||
                  data.time.toLowerCase().includes(search.toLowerCase())
              )
            "
            style="width: 100%"
            border
            height="500"
            type="danger"
            plain
          >
            <el-table-column
              label="瀏覽時間"
              prop="date"
              width="150"
              sortable
            />
            <el-table-column label="資料集名稱" prop="name" width="300">
              <template #default="scope">
                <el-popover
                  effect="light"
                  trigger="hover"
                  placement="top"
                  width="auto"
                >
                  <template #default class="fs-20">
                    <div>統計開始時間 : {{ scope.row.period_start }}</div>
                    <div>統計截止時間 : {{ scope.row.period_end }}</div>
                  </template>
                  <template #reference>
                    <el-tag class="fs-20">{{ scope.row.name }}</el-tag>
                  </template>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="提供單位" prop="unit" width="300" />
            <el-table-column label="是否公開" prop="is_public" width="120">
              <template #default="scope">
                <el-tag
                  class="fs-20"
                  :type="scope.row.is_public === '是' ? '' : 'danger'"
                  disable-transitions
                  >{{ scope.row.is_public }}</el-tag
                >
              </template>
            </el-table-column>
            <el-table-column label="使用操作" prop="">
              <template #default="scope">
                <router-link :to="{ name: 'Analysis' }" class="link">
                  <el-button
                    class="fs-20"
                    type="warning"
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)"
                    style="margin-left: 1em"
                    >查看分析</el-button
                  >
                </router-link>
                <el-button
                  class="fs-20"
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  style="margin-left: 1em"
                  ><i class="el-icon-delete"></i></el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>

    <!-- 新增資料集基本資料 等待刪除
    <div id="AddDataSet" style="margin-top: 200px">
      <div style="font-size: 20px">
        <p style="font-weight: bold; background-color: #10afafca">
          請填寫資料集基本資料
        </p>
        <br />資料集名稱 : <input type="text" style="margin-top: 10px" />
        <br />提供單位 : <input type="text" style="margin-top: 10px" />
        <br />資料集統計開始時間 :
        <div class="block">
          <span class="demonstration">Default</span
          ><el-date-picker
            v-model="value1"
            type="date"
            placeholder="Pick a day"
          />
        </div>
        <input type="text" style="margin-top: 10px" />
        <br />資料集統計截止時間<input type="text" style="margin-top: 10px" />
        <br />備註<input type="text" style="margin-top: 10px" />
        <br />是否公開<el-radio v-model="radio1" label="1" size="large"
          >Option 1</el-radio
        ><el-radio v-model="radio1" label="2" size="large">Option 2</el-radio>
        <br />上傳節點表 : <input type="file" style="margin-top: 10px" />
        <br />上傳屬性表 : <input type="file" style="margin-top: 10px" />
        <br />上傳肇事結果屬性表 :
        <input type="file" style="margin-top: 10px" /> <br />上傳肇事結果表 :
        <input type="file" style="margin-top: 10px" /> <br />上傳交通案件表 :
        <input type="file" style="margin-top: 10px" />
      </div>
    </div>
    -->
  </div>
</template>

<script>
// import AddDataSet from "@/views/AddDataSet.vue";
//import { ElMessage, ElMessageBox } from 'element-plus';
//import { ElMessageBox } from "element-plus";
export default {
  name: "Customer",
  setup() {
    return {
      open,
    };
  },
  data() {
    return {
      search: "",
      tableData: [
        {
          date: "2021-07-16",
          unit: "台中市政府交通部",
          name: "台中市車禍資料",
          period_start: "2020-06-03",
          period_end: "2021-03-02",
          is_public: "是",
        },
        {
          date: "2021-07-16",
          unit: "台中市政府交通部",
          name: "台中市車禍資料",
          period_start: "2020-06-03",
          period_end: "2021-03-02",
          is_public: "否",
        },
        {
          date: "2021-07-16",
          unit: "台中市政府交通部",
          name: "台中市車禍資料",
          period_start: "2020-06-03",
          period_end: "2021-03-02",
          is_public: "是",
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
    // const uploadata =() =>{
    //   ElMessageBox.prompt('Please input your e-mail', 'Tip', {
    //     confirmButtonText: 'OK',
    //     cancelButtonText: 'Cancel',
    //     inputPattern:
    //       /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    //     inputErrorMessage: 'Invalid Email',
    //   })
    //     .then(({ value }) => {
    //       ElMessage({
    //         type: 'success',
    //         message: `Your email is:${value}`,
    //       })
    //     })
    //     .catch(() => {
    //       ElMessage({
    //         type: 'info',
    //         message: 'Input canceled',
    //       })
    //     })
    // },
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
.cusdata-con_flex {
  display: flex;
  justify-content: center;
  padding: 1.25em 0;
}
.cos_main_sec {
  padding: 1em 1em;
  & p {
    font-size: 2.5em;
    padding-top: 0.5em;
    font-weight: bolder;
    letter-spacing: 10px;
    text-indent: 10px;
  }
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
.addbtn {
  font-weight: bold;
  color: #2670c5;
  background: #fff;
  font-size: 20px;
  border: 3px solid #2670c5;
  margin: 20px;
  display: block;
  &:hover {
    background: #2670c5bb;
    color: #fff;
  }
}
.fs-20 {
  font-size: 20px;
}
</style>
