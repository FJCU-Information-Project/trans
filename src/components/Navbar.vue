<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark nav">
        <router-link to="/home" class="link">
          <p id="logo">TRANS</p>
        </router-link>
      </div>
    </el-col>
  </el-row>
  <!-- <el-container> -->
    <!-- <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark nav">
          <router-link to="/home" class="link">
            <p id="logo">TRANS</p>
          </router-link>
          
          <button> -->
            <!-- <img src="https://cdn-icons.flaticon.com/png/512/3177/premium/3177283.png?token=exp=1639556831~hmac=d48cabdc1d2766058be61c55da58600d" alt="" class="account-icon">  -->
            <!-- Auth -->
          <!-- </button>
        </div>
        </el-col>
    </el-row>
  </el-container> -->
</template>

<!-- navbar template
<template>
  <nav>
    <ul>
      <li v-for="i in 5" :key="i">
        <router-link :to="`/page${i}`">Page{{ i }}</router-link>
      </li>
    </ul>
  </nav>
</template>
-->

<!-- script 
<script>
// @ is an alias to /src
export default {
  name: "Navbar" ,
  data(){
    var path = this.$route.params.path;
    return {
      path,
    }
  }
};
</script>
-->

<style lang="scss">
  .account-icon{
    width: 1em;
    height: 1em;
    margin-right: .5em;
  }
  .nav{
    padding: 1em 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #logo{
    padding: .5em 1em;
    background-color: transparent;
    font-weight: bold;
    letter-spacing: 4px;
    text-indent: 4px;
    font-size: 1.25em;
    color: white;
  }
  button{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5em 1em;
    font-size: 1.25em;
    font-weight: bolder;
    border: 0;
    background-color: transparent;
    color: white;
    letter-spacing: 3px;
    text-indent: 3px;
  }
  .el-row {
    margin-bottom: 0;
    // margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .grid-content {
    min-height: 36px;
  }
  .link{
    text-decoration: none;
  }
  // 原navbar scss
  // nav{
  //   width: 100%;
  //   height: 3em;
  //   padding: 0 2em !important;
  //   box-sizing: border-box;
  //   margin: auto;
  //   display: flex !important;
  //   align-items: center;
  //   justify-content: flex-end;
  //   background-color: #3a3a3a;
  //   color: white;
  //   letter-spacing: 4px;
  //   text-transform: uppercase;
  //   ul{
  //     display: flex;
  //     justify-content: space-around;
  //     li{
  //       margin-left: 2.5em;
  //       list-style: none;
  //       a{
  //         text-decoration: none;
  //         color: white;
  //         &:hover{
  //           color: #d6c7a6;
  //         }
  //       }
  //     }
  //   }
  // }
  
</style>
