<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content man-banner">
        <Navbar />
        <div class="ban-title">
          <h1>Analysis Management</h1>
          <div class="manage-btn">
            <router-link :to="{name: 'History'}" class="link">
              <el-button round type="danger" plain>History</el-button>
            </router-link>
            <router-link :to="{name: 'Favorite'}" class="link">
              <el-button round type="danger" plain>Favorite</el-button>
            </router-link>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Management",
  components: {
    Navbar,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
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
}
.con_flex {
  display: flex;
  justify-content: space-evenly;
  padding: 1.25em 0;
}
.main_sec {
  padding: 1em 1em;
}
.iframe_main_sec {
  height: 100vh;
  padding: 1em 1em;
}
.man-banner {
  // background: rgb(226, 226, 216);
  height: 80vh;
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
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 5em 0;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
  height: 92vh;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
