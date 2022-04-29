<template>
  <el-row class="close sticky-top">
    <el-col :span="24">
      <div class="grid-content nav">
        <router-link to="/dataset" class="link">
          <p id="logo">TRANS</p>
        </router-link>
        <div class="menu">
          <router-link v-if="false" :to="{ name: 'Analysis' }" class="link">
            <el-button round>Analysis</el-button>
          </router-link>
          <router-link :to="{ name: 'Index' }" class="link">
            <el-button round type="danger" class="fz-20 homebtn"
              ><i class="el-icon-s-home"></i>首頁</el-button
            >
          </router-link>
          <!-- <router-link v-if="isAuth" :to="{ name: 'Management' }" class="link">
            <el-button round>Management</el-button>
          </router-link> -->
          <!--使用者未登入前狀態 start-->
          <router-link :to="{ name: 'Login' }" class="link">
            <el-button round type="danger" class="fz-20"><i class="el-icon-user"></i>登入授權碼</el-button>
          </router-link>
          <!--使用者未登入前狀態 end-->

           <!--使用者未登入後的狀態 start-->
           <el-popover
              style="font-size:20px"
              ref="popover"
              placement="bottom"
              title="您的授權碼到期日為▼ "
              width="200"
              trigger="hover"
              :content="expireDate">
            </el-popover>
            <el-button class="afterlogin" v-popover:popover> 
              <el-avatar :size="30" class="avatarsize" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              {{ isAuth }}
            </el-button>
          <!--使用者未登入後的狀態 end-->

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
      isAuth: "載入中",
      expireDate: null,
    };
  },
  mounted() {
    if(localStorage.getItem("token")){
      var formData = new FormData();
      formData.append('token', localStorage.getItem("token"));
      const api = "http://140.136.155.121:50000";
      setTimeout(() => {
        this.$http
          .post(api + "/user", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.log(JSON.stringify(response.data));
            this.isAuth = response.data[2]+"，您好！";
            this.expireDate = new Date(Date.parse(response.data[5]));
          });
      }, 1000);

    }else{
      this.isAuth = "目前未登入";
    }
  },
  
};
</script>

<style lang="scss" scoped>
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
}
.fz-20 {
  font-size: 22px;
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
.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1020;
  background: #fff;
}
.afterlogin{
  background:white;
  color:blue;
  font-size: 22px;
}
.avatarsize{
  vertical-align:sub;
}
</style>
