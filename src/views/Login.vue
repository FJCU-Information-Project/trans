<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content login-banner">
        <Navbar v-if="this.$route.path !== '/dataset'" />
        <div class="login-title">
          <el-card shadow="always" class="con-flex">
            <h1>授權碼</h1>
            <el-input
              v-model="token"
              placeholder="請輸入授權碼"
              class="number_input"
            />
            <el-alert
              v-if="alert"
              title="error alert"
              type="error"
              description="授權碼無效"
              show-icon
            >
            </el-alert>
            <el-button @click="authcheck()" type="danger" class="submit">確認</el-button>
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
      alert: false,
    };
  },
  methods: {
    authcheck() {
      //const api = `https://fju-trans.herokuapp.com`;
      var formData = new FormData();
      formData.append('token', this.token);
      console.log(this.token)
      const api = `http://140.136.155.121:50000`;
      this.$http.post(api + "/auth", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((req) => {
        console.log(req.data);
        if (req.data.valid === true) {
          console.log("Token 是有用的!!");
          localStorage.setItem("token", this.token);
          // 2.然後跳轉到登入之後的頁面
          this.$router.push({ name: "Dataset" });
          this.alert = false;
        } else {
          console.log("Token 是廢物");
          this.alert = true;
        }
      });
    },
  },
  mounted() {
    console.log(this.$route.path);
  },
};
</script>

<style lang="scss">
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
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
  background-image: url(../assets/loginbg.jpg);
  background-size: cover;
  background-position: center;
  color: white;
  backdrop-filter: opacity(20%);
  & h1 {
    font-size: 4em;
    font-weight: bolder;
    letter-spacing: 10px;
    text-indent: 10px;
  }
}
</style>
