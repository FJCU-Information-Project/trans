<template>
  <div>
    <div class="grid-content banner">
      <Navbar />
      <el-breadcrumb class="link" separator="/">
        <el-breadcrumb-item :to="{ name: 'Dataset' }">
          <img class="IconImg back" src="../assets/left.png" />
          我的資料集</el-breadcrumb-item
        >
        <el-breadcrumb-item>新增資料集</el-breadcrumb-item>
      </el-breadcrumb>
      <el-form
        :model="form"
        label-width="180px"
        class="AddDataSetForm"
        :rules="rules"
        @submit.prevent="handleSubmit"
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
                  value-format="YYYY-MM-DD"
                />
              </el-form-item>
              <el-form-item label="統計截止時間" prop="period_end" required>
                <el-date-picker
                  v-model="form.period_end"
                  type="date"
                  placeholder="Pick a day"
                  :disabled-date="disabledDate"
                  :shortcuts="shortcuts"
                  value-format="YYYY-MM-DD"
                />
              </el-form-item>
            </div>
            <el-form-item label="備註欄" prop="note">
              <el-input v-model="form.note" type="textarea" />
            </el-form-item>
            <div class="d-flex">
              <el-form-item label="是否公開" prop="is_public" required>
                <el-radio-group v-model="form.is_public">
                  <el-radio border label="是" />
                  <el-radio border label="否" />
                </el-radio-group>
              </el-form-item>
            </div>
            <div class="d-flex" style="justify-content: end">
              <el-form-item class="d-flex">
                <el-button :disabled="dataDisable" type="warning" @click="handleSubmit">確定新增</el-button>
                <router-link :to="{ name: 'Dataset' }" class="link">
                  <el-button>取消新增</el-button>
                </router-link>
              </el-form-item>
            </div>
          </div>
          <!--file upload section start 此section 打開會跑錯 應是沒有載入script-->
          <div>
            <el-form-item v-for="uploadTable,key in uploadTables" :key="key" :label="uploadTable.label" required>
              <el-upload
                ref="Upload"
                :id="uploadTable.name"
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :limit="1"
                :on-exceed="handleExceed"
                :auto-upload="false"
              >
                <template #trigger>
                  <el-button type="primary">選取csv檔案</el-button>
                </template>
                <span class="el-upload__tip text-red">
                  僅限上傳一個檔案，新檔會覆蓋舊檔
                </span>
              </el-upload>
            </el-form-item>
            <el-button :disabled="fileDisable" class="ml-3" type="success" @click="submitUpload">
              上傳檔案
            </el-button>
            <a
              target="_blank"
              class="mannul"
              href="https://docs.google.com/document/d/1TJKFP8L7J7ZgWdPb-MqbvNO0T4FVj1w4PnQFyD132Yw/edit?usp=sharing"
              download="csv檔案規定格式及注意事項.pdf"
            >
              <img
                src="../assets/car.png"
                alt="carpdf"
                width="30"
                height="30"
              /> 點此查看格式規範
            </a>
            <el-form-item>
              <el-progress v-if="relation_status" type="dashboard" :percentage="relation_progress">
                <template #default="{ percentage }">
                  <span class="percentage-value">{{ percentage }}%</span>
                  <span class="percentage-label">Realationing...</span>
                </template>
              </el-progress>
              <el-progress v-if="weight_status" type="dashboard" :percentage="weight_progress">
                <template #default="{ percentage }">
                  <span class="percentage-value">{{ percentage }}%</span>
                  <span class="percentage-label">Weighting...</span>
                </template>
              </el-progress>
            </el-form-item>
          </div>
          <!--file upload section-->
        </div>
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
      dataDisable: false,
      fileDisable: true,
      form: {
        name: "",
        unit: "",
        period_start: "",
        period_end: "",
        note: "",
        is_public: "",
      },
      upload: null,
      // Form file name
      uploadTables:[
        {
          name: "attributeFileName",
          label: "肇事因素屬性表"
        },
        {
          name: "nodeFileName",
          label: "肇事因素表"
        },
        {
          name: "resultAttributeFileName",
          label: "肇事結果屬性表"
        },
        {
          name: "resultFileName",
          label: "肇事結果表"
        },
        {
          name: "caseFileName",
          label: "車禍案件總表"
        },
      ],
      relation_status: false,
      relation_progress: 0,
      weight_status: false,
      weight_progress: 0,
    };
  },
  methods: {
    handleSubmit() {
      console.log("data submit!");
      this.$message.success("送出新資料集資料");
      this.dataDisable = true;
      this.fileDisable = false;
      const formData = new FormData();
      const form = this.form;
      // ["datasetName", "datasetUnit", "datasetPeriodStart", "datasetPeriodEnd", "datasetNote", "datasetPublic"]
      formData.append("token", localStorage.getItem("token")); // Form userToken      

      formData.append("datasetName", form.name); // Form userToken
      formData.append("datasetUnit", form.unit); // Form userToken
      formData.append("datasetPeriodStart", form.period_start); // Form userToken
      formData.append("datasetPeriodEnd", form.period_end); // Form userToken
      formData.append("datasetNote", form.note); // Form userToken
      formData.append("datasetPublic", form.is_public); // Form userToken
      const api = "http://140.136.155.121:50000";
      this.$http
        .post(api + "/addDataset", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          let res = response.data;
          this.$notify({
            title: '資料集基本資訊',
            message: "資料集基本資訊已上傳完成",
            type: 'success',
          });
          console.log(res);
          if(res.status){
            console.log("Scheme create SUCCESS");
            console.log(res.datasetId);
            localStorage.setItem("dataset",res.datasetId);
          }else{
            console.log("Scheme create ERROR");
          }
        })
        .catch((error) => {
          this.$notify({
            title: '資料集基本資訊',
            message: "資料集基本資訊上傳失敗",
            type: 'error',
          });
          console.error(error);
        });
    },
    submitUpload() {
      console.log("submitUpload");
      this.$message({
        message:"上傳檔案",
        type: 'success'
      });
      this.fileDisable = true;

      const formData = new FormData();
      formData.append("token", localStorage.getItem("token")); // Form token
      formData.append("dataset", localStorage.getItem("dataset")); // Form dataset  
      const formDataFile = formData;
      
      this.uploadTables.forEach(element => {
        let file = document.getElementById(element.name).childNodes[2].lastChild.files[0];
        console.log(file);
        formDataFile.append(element.name, file);
      });
      const api = "http://140.136.155.121:50000";
      this.$http
        .post(api + "/uploadDatasets", formDataFile, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          this.$message({
            message:"上傳檔案完成",
            type: 'success'
          });
          console.log(JSON.stringify(response.data));
          this.$http
            .post(api + "/createTable", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response2) => {
              console.log(response2.data);
              this.$notify({
                title: '資料集檔案上傳完成',
                message: "資料集檔案上傳完成",
                type: 'info',
              });
              this.relation_status = true;
              const relation_progress_status = setInterval(() => {
                this.$http
                .get(api + "/relationshipStatus")
                .then((response) => {
                  console.log(response.data);
                  this.relation_progress = (100 * response.data.progress).toFixed(2);
                });
              }, 500);
              this.$http
                .post(api + "/relationship", formData, {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                })
                .then((response3) => {
                  clearInterval(relation_progress_status);
                  this.relation_progress = 100;
                  console.log(response3.data);
                  this.$notify({
                    title: '資料集關聯製作中',
                    message: "資料集關聯製作中 約需耗時30分鐘 請稍後回來 在此時間內請勿重新上傳資料集或離開此分頁",
                    type: 'info',
                  });
                  // this.$prompt('資料集關聯製作中 視資料大小約需耗時30分鐘至1小時', '請輸入Email，可在分析完成後會寄送Email給您，如不須通知可直接取消', {
                  //   confirmButtonText: '送出登記',
                  //   cancelButtonText: '取消',
                  //   inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                  //   inputErrorMessage: '信箱格式錯誤'
                  // }).then(({ value }) => {
                  //   console.log(value);
                  //   this.$message({
                  //     type: 'success',
                  //     message: `將在完成後送出通知至:${value}`,
                  //   })
                  // }).catch(() => {
                  //   console.log('cancel');
                  //   this.$message({
                  //     type: 'info',
                  //     message: `已取消通知`,
                  //   })
                  // });
                  this.weight_status = true;
                  const weight_progress_status = setInterval(() => {
                    this.$http
                    .get(api + "/weightStatus")
                    .then((response) => {
                      console.log(response.data);
                      this.weight_progress = (100*response.data.progress).toFixed(2);
                    });
                  }, 3000);
                  this.$http
                    .post(api + "/resultWeight", formData, {
                      headers: {
                        "Content-Type": "multipart/form-data",
                      },
                    })
                    .then((response4) => {
                      clearInterval(weight_progress_status);
                      this.weight_progress = 100;
                      console.log(response4.data);
                      this.$notify({
                        title: '資料集檔案關聯製作完成',
                        message: "資料集檔案關聯製作完成",
                        type: 'success',
                      });
                    }); 
                });
            }); 
        }); 
    },
    handleExceed() {
      console.log("handleExceed");
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
.el-breadcrumb__item {
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
  margin: 10px auto 0 10px;
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
.IconImg {
  vertical-align: sub;
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
.afterlogin{
  background:white;
  color:blue;
  font-size: 22px;
  border:none;
}
.avatarsize{
  vertical-align:sub;
}
.mannul{
  vertical-align: middle;
  margin-left: 10px;
  text-decoration: none;
  color: rgb(78, 78, 238);
  font-weight: bold;
}
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
</style>
