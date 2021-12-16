<template>
  <!-- 上傳資料及頁面 -->
  <el-row class="card-allocate">
    <el-col :span="7">
      <div class="grid-content bg-purple upload-card">
        <div class="icon-con">
          <img src="https://cdn-icons.flaticon.com/png/512/4292/premium/4292316.png?token=exp=1639641448~hmac=6280b8cb0beb9320f2d7efbd49eff5c6" alt="">
        </div>
        <h3>節點 Node</h3>
        <p class="describe">

        </p>
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            Drop file here or <em>click to upload</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
              jpg/png files with a size less than 500kb
            </div>
          </template>
        </el-upload>

      </div>
    </el-col>
    <el-col :span="7">
      <div class="grid-content bg-purple-light upload-card">
        <div class="icon-con">
          <img src="https://cdn-icons-png.flaticon.com/512/6389/6389267.png" alt="">
        </div>
        <h3>屬性 Attribute</h3>
        <p class="describe">

        </p>
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            Drop file here or <em>click to upload</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
              jpg/png files with a size less than 500kb
            </div>
          </template>
        </el-upload>
      </div>
    </el-col>
    <el-col :span="7">
      <div class="grid-content bg-purple upload-card">
        <div class="icon-con">
          <img src="https://cdn-icons-png.flaticon.com/512/995/995646.png" alt="">
        </div>
        <h3>關聯 Relationship</h3>
        <p class="describe">

        </p>
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            Drop file here or <em>click to upload</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
              jpg/png files with a size less than 500kb
            </div>
          </template>
        </el-upload>
      </div>
    </el-col>
  </el-row>
  <!-- <div id="upload">
    TRANS
  </div> -->
  <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
  <!-- <router-link to="/Home">
    <el-button type="primary">Home</el-button>
  </router-link> -->
</template>

<script>
export default {
    name: "Upload",
};
</script>

<style lang="scss">
  // 上傳資料頁面CSS
  .el-upload__tip{
    margin-top: 2em;
  }
  .upload-demo{
    margin-top: 2em;
  }
  .upload-card{
    box-sizing: border-box;
    height: 35em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & h3{
      margin-top: 2em;
      font-size: 1.25em;
      font-weight: bolder;
      color: #000;
    }
    // & form{
    //   margin-top: 5em;
    //   display: flex;
    //   flex-direction: column;
    //   align-items: center;
    //   & input:nth-child(1){
    //     border-radius: 30px;
    //     background: #fff;
    //     padding: .5em 0;
    //   }
    //   & input:nth-child(2){
    //     margin-top: 3em;
    //     width: 30%;
    //     border: 0;
    //     background-color: #fff;
    //     border-radius:10px;
    //     padding: .25em;
    //     font-size: 1.05em;
    //     letter-spacing: 5px;
    //     text-indent: 5px;
    //     font-weight: bolder;
    //   }
    // }
  }
  .icon-con{
    width: 150px;
    height: 150px;
    background: #fff;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    & img{
      width: 60%;
      height: 60%;
    }
  }
  .card-allocate{
    width: 100%;
    height: 85vh;
    padding: 3em 5em;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  //
</style>