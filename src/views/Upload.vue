<template>
  <!-- 上傳資料及頁面 -->
  <el-row class="card-allocate">
    <el-col :span="7"><div class="grid-content bg-purple upload-card"></div></el-col>
    <el-col :span="7"><div class="grid-content bg-purple-light upload-card"></div></el-col>
    <el-col :span="7"><div class="grid-content bg-purple upload-card"></div></el-col>
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
  .upload-card{
    height: 35em;
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