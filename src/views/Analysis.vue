<template>
  <div>
    <Navbar />
    <div class="container">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="grid-content bg-purple analysis-entry-card">
            <div class="filter">
              <h3 class="analysis-title">
                Overall <img class="IconImg" src="../assets/overall.png" />
              </h3>
              <div class="btn-group">
                <router-link :to="{ name: 'Overall' }" class="link">
                  <p class="analysis-btn">entry</p>
                </router-link>
              </div>
            </div>
          </div>
        </el-col>
        <el-col v-if="false" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="grid-content bg-purple analysis-entry-card degree-bg">
            <div class="filter">
              <h3 class="analysis-title">
                Degree Analysis
                <img class="IconImg" src="../assets/result.png" />
              </h3>
              <div class="btn-group">
                <router-link :to="{ name: 'DegreeAnalysis' }" class="link">
                  <p class="analysis-btn">entry</p>
                </router-link>
                <!-- <p class="analysis-btn">entry</p> -->
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="grid-content bg-purple analysis-entry-card">
            <div class="filter">
              <h3 class="analysis-title">
                Result Analysis
                <img class="IconImg" src="../assets/result.png" />
              </h3>
              <div class="btn-group">
                <router-link :to="{ name: 'ResultAnalysis' }" class="link">
                  <p class="analysis-btn">entry</p>
                </router-link>
                <!-- <p class="analysis-btn">entry</p> -->
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="grid-content bg-purple analysis-entry-card">
            <div class="filter">
              <h3 class="analysis-title">
                Basic Analysis<img class="IconImg" src="../assets/basic.png" />
              </h3>
              <div class="btn-group">
                <router-link :to="{ name: 'BasicAnalysis' }" class="link">
                  <p class="analysis-btn">entry</p>
                </router-link>
                <!-- <p class="analysis-btn">entry</p> -->
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="grid-content bg-purple analysis-entry-card">
            <div class="filter">
              <h3 class="analysis-title">
                Layer Analysis
                <img class="IconImg" src="../assets/layers.png" />
              </h3>
              <div class="btn-group">
                <router-link :to="{ name: 'LayerAnalysis' }" class="link">
                  <p class="analysis-btn">entry</p>
                </router-link>
                <!-- <p class="analysis-btn">entry</p> -->
              </div>
            </div>
          </div>
        </el-col>
        <!-- <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="grid-content bg-purple analysis-entry-card">
            <div class="filter">
              <h3 class="analysis-title">Closeness Analysis</h3>
              <div class="btn-group">
                <router-link :to="{ name: 'ClosenessAnalysis' }" class="link">
                  <p class="analysis-btn">entry</p>
                </router-link>
                 <p class="analysis-btn">entry</p> 
              </div>
            </div>
          </div>
        </el-col> -->
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="grid-content bg-purple analysis-entry-card">
            <div class="filter">
              <h3 class="analysis-title">
                Factor Rank <br />Analysis <img src="../assets/factor.png" />
              </h3>
              <div class="btn-group">
                <router-link :to="{ name: 'FactorRankAnalysis' }" class="link">
                  <p class="analysis-btn">entry</p>
                </router-link>
                <!-- <p class="analysis-btn">entry</p> -->
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
          <div class="grid-content bg-purple analysis-entry-card">
            <div class="filter">
              <h3 class="analysis-title">
                Isolation Analysis
                <img class="IconImg" src="../assets/isolation.png" />
              </h3>
              <div class="btn-group">
                <router-link :to="{ name: 'IsolationAnalysis' }" class="link">
                  <p class="analysis-btn">entry</p>
                </router-link>
                <!-- <p class="analysis-btn">entry</p> -->
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Analysis",
  components: {
    Navbar,
  },
  data() {
    return {
      src: "http://127.0.0.1:50000/",
    };
  },
};
</script>

<style lang="scss">
// 上傳資料頁面CSS
.upload-card {
  height: 35em;
}
.card-allocate {
  width: 100%;
  height: 120vh;
  padding: 3em 5em;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.filter {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
}
.analysis-title {
  font-size: 2.5em;
  font-weight: bolder;
  color: #595959;
  letter-spacing: 3px;
  text-indent: 3px;
}
.analysis-entry-card:hover {
  // background-color: rgba(119, 119, 184, .8);
  transition: ease-in-out 0.4s all;
  // filter:blur(3px);
}
.analysis-entry-card:hover .analysis-btn {
  border: 3px solid #fff;
  color: #fff;
  transition: ease-in-out 0.4s all;
}
.analysis-entry-card:hover .filter {
  background-color: rgba(119, 119, 184, 0.3);
  transition: ease-in-out 0.4s all;
  border-radius: 3px;
}
.btn-group {
  width: 300px;
  display: flex;
  justify-content: center;
  margin-top: 2em;
}
.analysis-btn {
  padding: 0.5em 1em;
  border: 3px solid transparent;
  font-size: 1.25em;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-indent: 4px;
  color: transparent;
  cursor: pointer;
}
.analysis-btn:hover {
  background-color: #fff;
  color: #000 !important;
}
.el-col {
  margin-bottom: 20px;
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
//
.home-banner {
  // background: rgb(226, 226, 216);
  height: auto;
  color: black;
  & h1 {
    font-size: 4em;
    font-weight: bolder;
    letter-spacing: 10px;
    text-indent: 10px;
  }
}
.carousel {
  background: rgb(255, 255, 255);
}

.container {
  width: 100%;
  padding: 1.25em 1.25em;
  box-sizing: border-box;
  height: 800px;
  background-image: url(../assets/greenbg.png);
  background-repeat: repeat-x;
  // background-image: url(https://images.pexels.com/photos/2705755/pexels-photo-2705755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
}

.link {
  text-decoration: none;
}
// .btn{
//   font-size: 12px;
//   letter-spacing: 0;
//   text-indent: 0;
//   font-weight: 400;
//   margin-top: 2em;
//   color: #fff;
//   background: #475669;
//   border-radius: 50px;
//   font-size: 1.05em;
//   letter-spacing: 3px;
//   text-indent: 3px;
//   cursor: pointer;
// }
.card {
  height: 300px;
  background-image: url(https://images.pexels.com/photos/2303781/pexels-photo-2303781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.home {
  padding: 3em 3em;
}
iframe {
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
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.analysis-entry-card {
  height: 18em;
  background-image: url(../assets/describe.jpg);
  //background-image: url(../assets/svg/degreebg.svg);
  background-position: center;
  background-size: cover;
  // box-shadow: 8px 8px 15px rgba(255, 255, 255, .5);
  box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.5);
  z-index: 100;
}
.degree-bg {
  background-image: url(../assets/greenbg.png);
}
.link {
  text-decoration: none;
}
.card {
  height: 300px;
  background-image: url(https://images.pexels.com/photos/2303781/pexels-photo-2303781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.home {
  padding: 3em 3em;
}
iframe {
  width: 80%;
  height: 90vh;
}
// .el-carousel__item h3 {
//   display: inline-block;
//   color: #475669;
//   font-size: 2em;
//   opacity: 0.75;
//   margin: 0;
//   text-align: center;
//   font-weight: bolder;
//   letter-spacing: 15px;
//   text-indent: 15px;
// }

// .el-carousel__item:nth-child(2n) {
//   background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }
@mixin svg($bottom, $size, $layer) {
  position: absolute;
  bottom: $bottom;
  width: $size;
  z-index: $layer;
}
#road {
  @include svg(0, 100%, -2);
  left: 0;
}
#moutain {
  @include svg(0, 40vw, -1);
  left: 0;
}
#redcar {
  @include svg(5vw, 25vw, -1);
  right: 30vw;
}
#bluecar {
  @include svg(11vw, 25vw, -1);
  right: 5vw;
}
#index {
  margin: 25vh auto;
  width: 80%;
  #title {
    color: #475669;
    font-size: 500%;
    letter-spacing: 0.5em;
    text-indent: 0.5em;
  }
  #entryPoint {
    margin-top: 4em;
    letter-spacing: 0.5em;
    text-indent: 0.5em;
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
    color: white;
    display: inline-block;
    background-color: #655a65;
    box-sizing: border-box;
    padding: 0.5em 1.5em;
    border-radius: 3em;
    text-transform: uppercase;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.IconImg {
  vertical-align: sub;
}
</style>
