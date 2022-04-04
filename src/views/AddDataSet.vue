<template>
  <div>
        <div class="grid-content banner">

     <el-row class="close sticky-top">
        <el-col :span="24">         
          <div class="grid-content nav">
            <el-breadcrumb class="link" separator="/">
                <el-breadcrumb-item :to="{ name: 'Dataset' }"> <img  class="IconImg back" src="../assets/left.png"> 我的資料集</el-breadcrumb-item>
                <el-breadcrumb-item
                  >新增資料集</el-breadcrumb-item
                >
              </el-breadcrumb>
            <div class="menu">
            <router-link :to="{ name: 'Login' }" class="link">
              <el-button round type="danger" class="fz-20">登入授權碼</el-button>
            </router-link>
            </div>
          </div>
        </el-col>
      </el-row>

      <el-form
        :model="form"
        label-width="180px"
        class="AddDataSetForm"
        :rules="rules"
      >
        <div class="d-flex jcsb">
          <div class="fs">
            <el-form-item label="資料集名稱" prop="name" required>
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="資料集提供單位" prop="unit" required>
              <el-input v-model="form.unit" />
            </el-form-item>
            <div class="d-flex">
              <el-form-item label="統計開始時間" prop="period_start" required>
                <el-date-picker
                  v-model="form.period_start"
                  type="date"
                  placeholder="Pick a day"
                  :disabled-date="disabledDate"
                  :shortcuts="shortcuts"
                />
              </el-form-item>
              <el-form-item label="統計截止時間" prop="period_end" required>
                <el-date-picker
                  v-model="form.period_end"
                  type="date"
                  placeholder="Pick a day"
                  :disabled-date="disabledDate"
                  :shortcuts="shortcuts"
                />
              </el-form-item>
            </div>
            <el-form-item label="備註欄" prop="note">
              <el-input v-model="form.note" type="textarea" />
            </el-form-item>
            <div class="d-flex">
              <el-form-item label="使否公開" prop="is_public" required>
                <el-radio-group v-model="form.is_public">
                  <el-radio border label="是" />
                  <el-radio border label="否" />
                </el-radio-group>
              </el-form-item>
            </div>
            <div class="d-flex" style="justify-content: end">
              <el-form-item class="d-flex">
                <el-button type="warning" @click="onSubmit">確定新增</el-button>
                <router-link :to="{ name: 'Dataset' }" class="link">
                  <el-button>取消新增</el-button>
                </router-link>
              </el-form-item>
            </div>
          </div>
          <!--file upload section start 此section 打開會跑錯 應是沒有載入script-->
          <!-- <div>
            <el-form-item label="節點表" required>
              <el-upload
                ref="Upload"
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :limit="1"
                :on-exceed="handleExceed"
                :auto-upload="false"
              >
                <template #trigger>
                  <el-button type="primary">選取csv檔案</el-button>
                </template>

                <template #tip> 僅限上傳一個檔案，新檔會覆蓋舊檔 </template>
              </el-upload>
            </el-form-item>
            <el-form-item label="屬性表" required>
              <el-upload
                ref="Upload"
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :limit="1"
                :on-exceed="handleExceed"
                :auto-upload="false"
              >
                <template #trigger>
                  <el-button type="primary">選取csv檔案</el-button>
                </template>
                <el-button class="ml-3" type="success" @click="submitUpload">
                  上傳檔案
                </el-button>
                <template #tip>
                  <div class="el-upload__tip text-red">
                    僅限上傳一個檔案，新檔會覆蓋舊檔
                  </div>
                </template>
              </el-upload>
            </el-form-item>
            <el-form-item label="肇事結果屬性表" required>
              <el-upload
                ref="Upload"
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :limit="1"
                :on-exceed="handleExceed"
                :auto-upload="false"
              >
                <template #trigger>
                  <el-button type="primary">選取csv檔案</el-button>
                </template>
                <el-button class="ml-3" type="success" @click="submitUpload">
                  上傳檔案
                </el-button>
                <template #tip>
                  <div class="el-upload__tip text-red">
                    僅限上傳一個檔案，新檔會覆蓋舊檔
                  </div>
                </template>
              </el-upload>
            </el-form-item>
            <el-form-item label="肇事結果表" required>
              <el-upload
                ref="Upload"
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :limit="1"
                :on-exceed="handleExceed"
                :auto-upload="false"
              >
                <template #trigger>
                  <el-button type="primary">選取csv檔案</el-button>
                </template>
                <el-button class="ml-3" type="success" @click="submitUpload">
                  上傳檔案
                </el-button>
                <template #tip>
                  <div class="el-upload__tip text-red">
                    僅限上傳一個檔案，新檔會覆蓋舊檔
                  </div>
                </template>
              </el-upload>
            </el-form-item>
            <el-form-item label="交通案件表" required>
              <el-upload
                ref="Upload"
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :limit="1"
                :on-exceed="handleExceed"
                :auto-upload="false"
              >
                <template #trigger>
                  <el-button type="primary">選取csv檔案</el-button>
                </template>
                <el-button class="ml-3" type="success" @click="submitUpload">
                  上傳檔案
                </el-button>
                <template #tip>
                  <div class="el-upload__tip text-red">
                    僅限上傳一個檔案，新檔會覆蓋舊檔
                  </div>
                </template>
              </el-upload>
            </el-form-item>
            <el-button class="ml-3" type="success" @click="submitUpload">
              上傳檔案
            </el-button>
          </div> -->
          <!--file upload section-->
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
// import Navbar from "@/components/Navbar.vue";
export default {
  name: "AddDataSet",
  
  data() {
    return {
      input: "",
      form: {
        name: "",
        unit: "",
        period_start: "",
        period_end: "",
        note: "",
        is_public: "",
      },
      upload: null,
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    submitUpload() {
      console.log("submitUpload");
      this.upload.submit();
    },
    handleExceed(files) {
      this.upload.clearFiles();
      const file = files[0];
      console.log(file);
      // file.uid = genFileId();
      // this.upload.value.handleStart(file);
    },
  },
  mounted() {
    this.upload = this.$refs.Upload;
  },
};
</script>

<style lang="scss">
.column_input {
  width: 60%;
}
.el-form-item {
  & .manage-btn {
    width: auto;
  }
}
.el-form-item__content {
  margin-left: 0 !important;
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
.banner {
  // background: rgb(226, 226, 216);
  height: 120vh;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-image: url(../assets/adddata.png);
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
.addDataTitle {
  font-size: 2.5em;
  padding-top: 0.2em;
  font-weight: bolder;
  letter-spacing: 10px;
  text-indent: 10px;
}
.con {
  width: 100%;
  height: 90vh;
  background: #e9eef3;
  display: grid;
  place-items: center;
}
.config-form {
  width: 70%;
  margin: auto;
  padding: 2em 2em;
  background: #fff;
  border-radius: 10px;
}
.AddDataSetForm {
  background: rgba(173, 216, 230, 0.822);
  width: 80%;
  margin: 50px auto;
  padding: 30px 25px 10px 25px;
  border: 2px solid rgba(112, 208, 240, 0.822);
}
.fs {
  font-size: 18px;
}
.d-flex {
  display: flex;
}
.jcsb {
  justify-content: space-evenly;
}
.el-breadcrumb__item{
  float: none;
}
// .el-breadcrumb__item,
// .el-breadcrumb__inner {
//   color: #fff !important;
//   margin: 10px 0 0 10px;
// }
.el-form-item__label {
  font-size: 18px !important;
  font-weight: bold;
}
.el-button {
  font-size: 18px !important;
}
.grid-content {
  min-height: 36px;
}
.link {
  text-decoration: none;
  margin: 0 10px;
  font-size: 25px;
  color: #10afafca;
  font-weight: bold;
}
.fz-20 {
  font-size: 22px;
}

.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1020;
  background: #fff;
}
.IconImg{
  vertical-align:sub;
}
.nav {
  width: 100%;
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 8px 8px 15px rgb(0, 0, 0, 0.6);
  border-radius: 0 !important;
  background: transparent;
  box-sizing: border-box;
}
</style>
