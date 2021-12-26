<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content banner">
        <Navbar />
        <div class="ban-title">
          <el-form
            ref="form"
            :model="form"
            label-width="120px"
            class="config-form"
          >
            <el-form-item label="Activity type">
              <el-checkbox-group v-model="form.type">
                <el-checkbox
                  label="Online activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Promotion activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Offline activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Simple brand exposure"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Online activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Promotion activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Offline activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Simple brand exposure"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Online activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Promotion activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Offline activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Simple brand exposure"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Online activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Promotion activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Offline activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Simple brand exposure"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Online activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Promotion activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Offline activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Simple brand exposure"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Online activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Promotion activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Offline activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Simple brand exposure"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Online activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Promotion activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Offline activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Simple brand exposure"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Online activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Promotion activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Offline activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Simple brand exposure"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Online activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Promotion activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Offline activities"
                  name="type"
                ></el-checkbox>
                <el-checkbox
                  label="Simple brand exposure"
                  name="type"
                ></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Config",
  components: {
    Navbar,
  },
  data() {
    return {
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
</style>
