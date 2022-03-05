<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content login-banner">
        <Navbar />
        <div class="login-title">
          <el-card shadow="always" class="con-flex">
            <h1>授權碼</h1>
            <el-input
              v-model="token"
              placeholder="請輸入授權碼"
              class="number_input"
              @change="authcheck"
            />
            <el-button type="danger" class="submit">確認</el-button>
          </el-card>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Login",
  components: {
    Navbar,
  },
  data() {
    return {
      token: "",
    }
  },
  methods: {
    authcheck() {
      //const api = `https://fju-trans.herokuapp.com`;
      const api = `http://localhost:50000`;
      this.$http
        .post(api + "/auth", {"token": this.token})
        .then((req) => {
          console.log(req.data);
          if (req.data.valid === true){
            console.log("Token 是有用的!!");
            // TODO:
            // 1.把this.token存到localstorage
            // 2.然後跳轉到登入之後的頁面
          }else{
            console.log("Token 是廢物");
            // TODO:
            // 1.讓使用者知道這個token不能用
          }
        });
    },
  },
};
</script>

<style lang="scss">
.login-title {
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // & span{
  //   display: inline-block;
  //   margin-top: 3em;
  // }
}
.con-flex {
  height: 20vw;
  width: 40vw;
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.submit {
  // width: 201;
  font-size: 1.25em;
  letter-spacing: 1em;
  text-indent: 1em;
  margin-top: 2.5em;
}
.number_input {
  width: 90%;
  margin-top: 2.5em;
}
.login-banner {
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-image: url(https://images.pexels.com/photos/10003543/pexels-photo-10003543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  background-size: cover;
  background-position: center;
  color: white;
  & h1 {
    font-size: 4em;
    font-weight: bolder;
    letter-spacing: 10px;
    text-indent: 10px;
  }
}
</style>
