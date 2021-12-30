<template>
  <el-row class="close">
    <el-col :span="24">
      <div class="grid-content nav">
        <router-link to="/dataset" class="link">
          <p id="logo">TRANS</p>
        </router-link>
        <div class="menu">
          <router-link :to="{ name: 'Config' }" class="link">
            <el-button round>Config</el-button>
          </router-link>
          <router-link :to="{ name: 'Home' }" class="link">
            <el-button round>Analysis</el-button>
          </router-link>
          <router-link :to="{ name: 'Management' }" class="link">
            <el-button round>Management</el-button>
          </router-link>
          <router-link :to="{ name: 'Login' }" class="link">
            <el-button round type="danger">Auth</el-button>
          </router-link>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Navbar",
  data() {
    //var path = this.$route.params.path;
    return {
      //path,
    };
  },
};
</script>

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
  width: 40%;
  display: flex;
  justify-content: space-between;
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
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 8px 8px 15px rgb(255, 255, 255);
  border-radius: 0 !important;
  background: transparent;
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
button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
  font-size: 1.25em;
  font-weight: bolder;
  border: 0;
  background-color: transparent;
  color: white;
  letter-spacing: 3px;
  text-indent: 3px;
}
.el-row {
  // margin-bottom: 20px;
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
// button{
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: .5em 1em;
//   font-size: 1.25em;
//   font-weight: bolder;
//   border: 0;
//   background-color: transparent;
//   color: white;
//   letter-spacing: 3px;
//   text-indent: 3px;
// }
.el-row {
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
.link {
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
