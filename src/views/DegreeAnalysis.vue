<template>
  <el-row class="close">
    <el-col :span="24">
      <div class="grid-content banner">
        <Navbar />
        <div class="ban-title">
          <h1>Degree Analysis</h1>
          <span style="font-weight: bolder" class="sub-title">
            我們將會為您呈現整個網路途中每個節點跟其他節點關聯性前十強的節點
          </span>
        </div>
      </div>
    </el-col>
  </el-row>
  <el-row class="con_flex">
    <el-col :span="11">
      <div class="grid-content bg-purple main_sec">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </div>
    </el-col>
    <el-col :span="9" class="analysis-table">
      <h1>Degree Analysis</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error provident
        fuga maxime molestiae eligendi at quis recusandae laborum dolorem velit?
        Aperiam ullam earum veniam mollitia dolorem vero sequi vitae asperiores!
      </p>
    </el-col>
  </el-row>
  <el-footer>Footer</el-footer>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "DegreeAnalysis",
  components: {
    Navbar,
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.el-table__cell {
  text-align: center !important;
}
.analysis-table {
  & p {
    text-align: left;
    margin-top: 2em;
  }
  & h1 {
    text-align: left;
    font-size: 2.5em;
    font-weight: bolder;
  }
  & hr {
    height: 5px;
    background: #fc7064;
    border: 0;
    margin-top: 2em;
  }
}
.el-table {
  margin-top: 0;
  border-radius: 0.45em;
}
.close {
  margin-bottom: 0 !important;
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
  padding: 5em 2em;
}
.main_sec {
  padding: 1em 1em;
}
.iframe_main_sec {
  height: 100vh;
  padding: 1em 1em;
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
