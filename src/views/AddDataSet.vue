<template>
<div>
    <Navbar />
      <div class="banner">
        <p class="addDataTitle">新增資料集</p>
        <el-form :model="form" label-width="120px" class="AddDataSetForm">
            <div class="d-flex">
              <div>
                <el-form-item label="資料集名稱">
                  <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="資料集提供單位">
                  <el-input v-model="form.unit" />
                </el-form-item>
                <div class="d-flex"> 
                <el-form-item label="統計開始時間">
                <el-date-picker
                  v-model="form.period_start"
                  type="date"
                  placeholder="Pick a day"
                  :disabled-date="disabledDate"
                  :shortcuts="shortcuts"/>
                </el-form-item>
                <el-form-item label="統計截止時間">
                <el-date-picker
                  v-model="form.period_end"
                  type="date"
                  placeholder="Pick a day"
                  :disabled-date="disabledDate"
                  :shortcuts="shortcuts"/>
                </el-form-item>
                </div>
                <el-form-item label="備註欄">
                  <el-input v-model="form.note" type="textarea" />
                </el-form-item>
                <div  class="d-flex">
                <el-form-item label="使否公開">
                  <el-radio-group v-model="form.is_public">
                    <el-radio border label="是" />
                    <el-radio border label="否" />
                  </el-radio-group>
                </el-form-item>
              </div>
            </div>
            <div>
              <el-form-item label="上傳節點表">
                  <!-- <el-input v-model="form.name" /> -->
                  <el-upload
                    ref="Upload"
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :limit="1"
                    :on-exceed="handleExceed"
                    :auto-upload="false"
                  >
                    <template #trigger>
                      <el-button type="primary">select file</el-button>
                    </template>
                    <el-button class="ml-3" type="success" @click="submitUpload">
                      upload to server
                    </el-button>
                    <template #tip>
                      <div class="el-upload__tip text-red">
                        limit 1 file, new file will cover the old file
                      </div>
                    </template>
                  </el-upload>
                </el-form-item>
                <el-form-item label="上傳屬性表">
                  <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="上傳肇事結果屬性表">
                  <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="上傳肇事結果表">
                  <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="上傳交通案件表">
                  <el-input v-model="form.name" />
                </el-form-item>
            </div>
          </div>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">建立新增</el-button>
            <router-link :to="{ name: 'Dataset' }" class="link">
              <el-button>取消新增</el-button>
            </router-link>
          </el-form-item>
      </el-form> 
      </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "AddDataSet",
  components: {
    Navbar,
  },
  data() {
    return {
      input: "",
      form: {
        name: "",
        unit:"",
        period_start:"",
        period_end:"",
        note:"",
        is_public:"",
      },
      upload:null,
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    submitUpload(){
      console.log("submitUpload");
      this.upload.submit();
    },
    handleExceed(files){
      this.upload.clearFiles();
      const file = files[0];
      console.log(file);
      // file.uid = genFileId();
      // this.upload.value.handleStart(file);
    }
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
  height: auto;
  padding-bottom: 100px;
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
.addDataTitle{
    font-size: 2.5em;
    padding-top: 0.5em;
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
.AddDataSetForm{
  background:lightblue;
  width:80%;
  margin:50px 100px auto;
  padding:50px;
}
.el-form-item{
  font-size: 2.5em;
}
.d-flex{
  display: flex;
}
</style>
