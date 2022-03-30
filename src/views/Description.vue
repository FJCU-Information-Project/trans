<template>
  <div>
    <div class="grid-content banner">
      <Navbar />
      <el-row>
        <el-col :span="7">
        </el-col>
        <el-col :span="10" class="step_box">
          <el-steps :active="active" finish-status="success">
            <el-step title="Step 1" class="translate"/>
            <el-step title="Step 2" class="translate"/>
            <el-step title="Step 3" />
          </el-steps>
          <div class="step_con">
            <el-button style="margin-top: 12px" @click="next" plain round type="danger">下一步</el-button>
          </div>
        </el-col>
        <el-col :span="7">
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { ref } from 'vue'

const active = ref(0)

const next = () => {
  if (active.value++ > 2) active.value = 0
}

export default {
  name: "Config",
  components: {
    Navbar,
  },
  data() {
    return {
      input: "",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};

</script>

<style lang="scss">
.el-step__title {
    text-align: center;
}
.el-step__line {
    transform: translateX(50%);
}
.translate{
  transform: translateX(-50%);
}
.el-step__icon{
  width: 40px !important;
  height: 40px !important;
  margin-top: -1.5em;
}
.step_con{
  width: 100%;
  height: 600px;
  margin-top: 3em;
  background: #f7f7fa;
  display: flex;
  align-items: flex-end;
  padding: 2em 1em;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 30px;
}
.step_box{
  margin-top: 6em;
}
.column_input {
  width: 60%;
}
.el-form-item {
  & .manage-btn {
    width: auto;
  }
}
.el-form-item__content {
  margin-left: 0 !important;
}
.manage-btn {
  width: 25%;
  display: flex;
  justify-content: space-between;
  // background: #b3c0d1;
  margin-top: 3em;
  & span {
    margin-top: 0;
    font-size: 1.25em;
  }
}
.ban-title {
  height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // & span{
  //   display: inline-block;
  //   margin-top: 3em;
  // }
}
.banner {
  // background: rgb(226, 226, 216);
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
.con {
  width: 100%;
  height: 90vh;
  background: #e9eef3;
  display: grid;
  place-items: center;
}
.config-form {
  width: 70%;
  margin: auto;
  padding: 2em 2em;
  background: #fff;
  border-radius: 10px;
}
.AddDataSetForm{
  background:lightblue;
  width:80%;
  margin:100px auto;
}
</style>
