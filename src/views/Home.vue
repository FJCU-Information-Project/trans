<template>
    <Navbar />
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <!-- <iframe :src="src" frameborder="0"></iframe> -->
         <el-carousel :interval="4000" type="card" height="300px">
            <el-carousel-item>
              <div class="medium card">
                  <h3>使用者設定</h3>
                  <router-link to="/Upload" class="link">
                    <button class="btn">CONFIG</button>
                  </router-link>
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="medium card">
                  <h3>上傳資料</h3>
                  <router-link to="/Upload" class="link">
                    <button class="btn">UPLOAD</button>
                  </router-link>
                </div>
            </el-carousel-item>
          </el-carousel>
    </div>
    <!-- 上傳資料及頁面 -->
    <div class="upload-container">
      <el-row>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  data (){
    return {
      src : 'http://127.0.0.1:5000/'
    }
  },
  name: "Home" ,
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
  // 上傳資料頁面CSS
  .upload-container{
    width: 100%;
    height: 100vh;
    padding: 3em;

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
  .link{
    text-decoration: none;
  }
  .btn{
    font-size: 12px;
    letter-spacing: 0;
    text-indent: 0;
    font-weight: 400;
    margin-top: 2em;
    color: #fff;
    background: #475669;
    border-radius: 50px;
    font-size: 1.05em;
    letter-spacing: 3px;
    text-indent: 3px;
  }
  .card{
    height: 300px;
    background-image: url(https://images.pexels.com/photos/2303781/pexels-photo-2303781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .home{
    padding: 3em 3em;
  }
  iframe{
    width: 80%;
    height: 90vh;
  }
  .el-carousel__item h3 {
    display: inline-block;
    color: #475669;
    font-size: 2em;
    opacity: 0.75;
    margin: 0;
    text-align: center;
    font-weight: bolder;
    letter-spacing: 15px;
    text-indent: 15px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>
