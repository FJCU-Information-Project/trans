<template>
  <div>
    <div class="grid-content banner">
      
  <el-row class="close sticky-top">
    <el-col :span="24">
      <div class="grid-content nav">
        <router-link :to="{ name: 'Index' }" class="link">
            <img class="IconImg" src="../assets/left.png"> 首頁
          </router-link>
        <div class="menu">
          <router-link :to="{ name: 'Login' }" class="link">
            <el-button round type="danger" class="fz-20">登入授權碼</el-button>
          </router-link>
        </div>
      </div>
    </el-col>
  </el-row>

      <el-row class="describebg">
        <el-col class="describecontent">
          <h4 class="describetitle">社會網路分析簡介</h4>
          <h5 class="green"><img src="../assets/tag.png"> 社會網路圖</h5>
          <img src="../assets/DescribeSna.png" alt="snaneteworkpic">
          <p>● 一個節點(node)代表一個獨立的個體。</p>
          <p>● 兩個或兩個以上的節點相連就代表其形成關聯(relationship)。</p>
          <p>● 每一組關聯依照其關聯程度的高低擁有不同權重，利用網絡圖中邊(edge)的粗細呈現。</p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<style lang="scss">
 
.ban-title {
  height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & span {
    display: inline-block;
    margin-top: 3em;
  }
}
.menu {
  width: 30%;
  display: flex;
  justify-content: flex-end;
}
.close {
  margin-bottom: 0 !important;
}
.account-icon {
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
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
#logo {
  padding: 0.5em 1em;
  background-color: transparent;
  font-weight: bold;
  letter-spacing: 4px;
  text-indent: 4px;
  font-size: 1.25em;
  color: #fc6471 !important;
}
button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
  font-size: 1.25em;
  font-weight: bolder;
  border: 0;
  background-color: #fc6471;
  color: white;
  letter-spacing: 3px;
  text-indent: 3px;
}
.el-row {
  &:last-child {
    margin-bottom: 0;
  }
}
.account-icon {
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
}
#logo {
  padding: 0.5em 1em;
  background-color: transparent;
  font-weight: bold;
  letter-spacing: 4px;
  text-indent: 4px;
  font-size: 1.25em;
  color: white;
}

.el-row {
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  margin-bottom: 0;
}
.bg-purple-dark {
  background: #99a9bf;
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
.describebg{
  background-image: url(../assets/snadescribe.jpg);
  padding: 0 200px;
}
.describecontent{
  margin:50px auto;
  background: #ffffff;
  padding: 20px 100px;
  border-radius: 3%;
  text-align: left;
  font-size: 20px;
  line-height: 1.8;
}
.describetitle{
  font-weight: bold;
  font-size: 25px;
  text-align: center;
}
.green{  
  color: #10afafca;
  font-weight: bold;
}
</style>
