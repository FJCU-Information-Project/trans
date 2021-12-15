<template>
    <Navbar />
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <!-- <iframe :src="src" frameborder="0"></iframe> -->
         <el-carousel :interval="4000" type="card" height="300px">
            <el-carousel-item v-for="item in 2" :key="item">
              <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
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
  .home{
    padding: 3em 3em;
  }
  iframe{
    width: 80%;
    height: 90vh;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>
