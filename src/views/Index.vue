<template>
  <div>
    <Navbar />
    <!--<div class="ban-title">
          <h1>Welcome to Trans</h1>
        </div>-->

    <el-row class="close">
      <el-col :span="24">
        <div id="index">
          <h3 id="title">TRANS</h3>
          <router-link id="entryPoint" to="/Dataset">Get Start!</router-link>
        </div>
        <img id="road" src="../assets/svg/road.svg" alt="" />
        <img id="moutain" src="../assets/svg/moutain.svg" alt="" />
        <img id="redcar" src="../assets/svg/redcar.svg" alt="" />
        <img id="bluecar" src="../assets/svg/bluecar.svg" alt="" />
      </el-col>
    </el-row>
    <!--web mannul start-->
    <el-row justify="center" class="MannulCard">
      <el-col :span="6">
        <el-card :body-style="{ padding: '15px' }" shadow="hover">
          <img src="../assets/svg/degreebg.svg" class="image" />
          <h3>系統操作說明<br />檔案匯入及分析操作</h3>
          <div class="p-14">
            <p class="p-14 gray">開始分析前，先了解操作系統和注意事項。</p>
            <router-link :to="{ name: 'SysMannul' }" class="link p-14">
              深入了解
            </router-link>
          </div>
        </el-card>
      </el-col>
      <el-col :span="2"></el-col>
      <el-col :span="6">
        <el-card :body-style="{ padding: '10px' }" shadow="hover">
          <img src="../assets/svg/analyze.svg" class="image" />
          <h3>淺談<br />社會網路圖分析</h3>
          <div class="p-14">
            <p class="p-14 gray">經由社會網路，讓肇事因素關聯一目了然。</p>
            <router-link :to="{ name: 'SnaDescription' }" class="link p-14">
              深入了解
            </router-link>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!--web mannul end-->
    <!--web trait start-->
    <div class="transtrait">TRANS TRAITS</div>
    <el-row class="row-bg" justify="center">
      <el-col :span="6" class="grid-content bg-green">
        <div class="introduce">
          <img src="../assets/hand-shake.png" class="iconsize" />
          <p class="bold">簡易</p>
          <p class="introducecontent">操作容易，三分鐘上手</p>
        </div>
      </el-col>
      <el-col :span="6" class="grid-content bg-red">
        <div class="introduce">
          <img src="../assets/view.png" class="iconsize" />
          <p class="bold">清晰</p>
          <p class="introducecontent">網路圖分析一目了然</p>
        </div>
      </el-col>
      <el-col :span="6" class="grid-content bg-green">
        <div class="introduce">
          <img src="../assets/car.png" class="iconsize" />
          <p class="bold">多樣</p>
          <p class="introducecontent">多種不同形式之網路圖分析</p>
        </div>
      </el-col>
    </el-row>
    <!--web trait end-->

    <!--carousel start-->
    <el-carousel :interval="4000" type="card" height="300px" class="ma">
      <el-carousel-item>
        <div class="item">
          <div class="item__content">開車不喝酒，喝酒不開車</div>

          <img class="item__image" src="../assets/factorank.png" alt="" />
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="item">
          <div class="item__content">肇事因素關鍵點就在TRANS</div>
          <img class="item__image" src="../assets/layerana.png" alt="" />
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="item">
          <div class="item__content">交通之社會網路分析</div>
          <img class="item__image" src="../assets/isolationana.png" alt="" />
        </div>
      </el-carousel-item>
    </el-carousel>
    <!--carousel end-->
    <!--contact start-->
    <div class="transtrait">與 TRANS 聯絡</div>

    <p class="contactp">
      您有其他疑問需要解惑嗎？或是在使用系統過程中有任何的狀況嗎？只要您有需要，我們都在！
    </p>
    <div class="container">
      <div class="contact-box">
        <div class="left"></div>
        <div class="right">
          <h2>Contact Us 聯絡資訊</h2>
          <input type="text" class="field" placeholder="Your Name 您的大名" />
          <input type="text" class="field" placeholder="Your Email 您的郵件" />
          <input type="text" class="field" placeholder="Topic 主旨" />
          <textarea placeholder="Message 輸入您的疑問" class="field"></textarea>
          <button class="btn">Send 寄送訊息</button>
        </div>
      </div>
    </div>

    <!--contact end-->
    <!--Footer-->
    <Footer />
    <!--Footer-->
  </div>
</template>

<script>
// @ is an alias to /src
//import 'mdb-vue-ui-kit/css/mdb.min.css';
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Analysis",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      src: "http://127.0.0.1:50000/",
    };
  },
};
</script>

<style lang="scss">
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
.footer {
  margin-top: 1.25em;
}

.footer {
  height: 25em;
  margin-top: 0;
  background: rgb(110, 94, 73);
}

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
    color: #655a65;
    display: inline-block;
    background-color: #fff;
    border: 3px solid #655a65;
    box-sizing: border-box;
    padding: 0.5em 1.5em;
    border-radius: 3em;
    text-transform: uppercase;
    text-decoration: none;
    &:hover {
      background-color: #655a65;
      color: #fff;
    }
    &:active {
      background-color: #655a65ce;
    }
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
// .el-carousel__item h3 {
//   color: #475669;
//   font-size: 18px;
//   opacity: 0.75;
//   line-height: 300px;
//   margin: 0;
//   text-align: center;
// }

// .el-carousel__item:nth-child(2n) {
//   background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }
.item {
  position: relative;
  height: 100%;
}

.item__content {
  position: absolute;
  bottom: 0;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(92, 90, 90, 0.5);
  color: #fff;
  padding: 3px;
}

.item__image {
  width: 80%;
  height: 100%;
  object-fit: contain;
}

.el-carousel__item:nth-child(2n) {
  background-color: #d3dce6;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
<style>
.time {
  font-size: 13px;
  color: #999;
}

.image {
  width: 50%;
  margin: 0 auto;
  display: block;
  padding: 20px 0;
}
.MannulCard {
  margin: 60px 0;
  line-height: 1.5;
}
.MannulCard .el-card {
  border: 1px solid #f56c6c;
}
.MannulCard h3 {
  font-size: 25px;
  font-weight: bold;
  background: rgba(189, 185, 185, 0.144);
}
.MannulCard p {
  font-size: 16px;
}
.MannulCard a {
  text-decoration: none;
  border: 1px solid rgb(74, 154, 207);
  display: block;
  color: rgb(74, 154, 207);
  font-weight: bold;
  font-size: 18px;
  margin: 10px 0;
}
.MannulCard a:hover {
  background: rgb(74, 154, 207);
  color: #fff;
}
.MannulCard a:active {
  background: rgb(74, 154, 207);
  opacity: 80%;
}
.p-14 {
  padding: 14px;
}
.gray {
  color: rgb(104, 100, 100);
}
.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1020;
  background: #fff;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  color: #fff;
}
.row-bg {
  padding: 30px 0;
  background-color: #f9fcf9;
  margin: 20px 0;
}
.bg-green {
  background: #10afafca;
  padding: 50px 0px;
}
.bg-red {
  background: #f56c6cc2;
  padding: 50px 0px;
}
.bold {
  font-weight: bold;
  margin: 10px 0;
}
.introduce {
  padding: 10px 5px;
  font-size: 25px;
}
.introducecontent {
  font-size: 20px;
  margin: 25px 0;
}
.transtrait {
  color: gray;
  font-weight: bolder;
  font-size: 40px;
  margin-bottom: 10px;
}
.iconsize {
  width: 20%;
  margin: 0 auto;
  display: block;
}
.ma {
  margin: 100px 0;
}
</style>
<style>
.container {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 100px;
}

.container:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: url("../assets/bg.jpg") no-repeat center;
  background-size: cover;
  filter: blur(50px);
  z-index: -1;
}
.contact-box {
  max-width: 850px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
}

.left {
  background: url("../assets/bg.jpg") no-repeat center;
  background-size: cover;
  height: 100%;
}

.right {
  padding: 25px 40px;
}

h2 {
  position: relative;
  padding: 0 0 10px;
  margin-bottom: 10px;
  font-size: 25px;
}

h2:after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  height: 4px;
  width: 50px;
  border-radius: 2px;
  background-color: #f56c6c;
}

.field {
  border: 2px solid rgba(0, 0, 0, 0);
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  margin: 11px 0;
  transition: 0.3s;
}

.field:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

textarea {
  min-height: 150px;
}

.btn {
  width: 75%;
  padding: 0.5rem 1rem;
  background-color: #fff;
  color: #f56c6c;
  font-size: 1.1rem;
  border: 1px solid #f56c6c;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  display: inline;
  border-radius: 5px;
}

.btn:hover {
  color: #fff;
  background-color: #f56c6cd3;
}

.field:focus {
  border: 2px solid rgba(30, 85, 250, 0.47);
  background-color: #fff;
}

@media screen and (max-width: 880px) {
  .contact-box {
    grid-template-columns: 1fr;
  }
  .left {
    height: 200px;
  }
}
.contactp {
  margin: 50px 0;
  font-size: 20px;
  font-weight: bold;
  color: gray;
}
</style>
