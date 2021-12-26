<template>
  <Navbar />
  <el-row>
    <el-col :span="24">
      <div class="grid-content login-banner">
        <el-col :span="8">
          <el-card shadow="always" class="con-flex">
            <h1>授權碼</h1>
            <el-input
              v-model="input"
              placeholder="請輸入授權碼"
              class="number_input"
            />
            <el-button type="danger" class="submit">確認</el-button></el-card
          >
        </el-col>
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
};
</script>

<style lang="scss">
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
  background: rgb(226, 226, 216);
  height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 5em 0;
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
