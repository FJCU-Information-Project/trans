<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content banner">
        <h1>Layer Analysis</h1>
        <span style="font-weight: bolder;">
          請選擇您想分析的中心節點及階層，我們將會為您呈現中心節點向外發散的層級關係點層級
        </span>
        <div class="select-group">
          <el-select v-model="value" placeholder="請選擇中心節點">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-select v-model="value" placeholder="請選擇層級">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
       
      </div>
    </el-col>
  </el-row>
  <el-row class="con_flex">
    <el-col :span="12">
      <div class="grid-content bg-purple-light iframe_main_sec">
        <iframe src="/SNA.html" frameborder="0" width="100%" height="100%">
          <!-- 社會網路圖 -->
        </iframe>
      </div>
    </el-col>
    <el-col :span="11">
      <div class="grid-content bg-purple main_sec">
        <el-table :data="tableData" stripe style="width: 100%;">
          <el-table-column prop="date" label="Date" width="180"/>
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </div>
    </el-col>
  </el-row>
  <!-- <el-container>
    <el-aside width="300px">
      <el-select v-model="value" placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-aside>
    <el-main> -->
      <!-- <iframe src="/SNA.html" frameborder="0" width="100%" height="100%"> -->
        <!-- 社會網路圖 -->
      <!-- </iframe> -->
    <!-- </el-main>
  </el-container> -->

</template>

<script>
export default {
  name: "Analysis1",
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
    }
  },
};

</script>

<style lang="scss">
.select-group{
  width: 30%;
  display: flex;
  justify-content: space-between;
}
.con_flex{
  display: flex;
  justify-content: space-evenly;
  padding: 1.25em 0;
}
.main_sec{
  padding: 1em 1em;
}
.iframe_main_sec{
  height: 100vh;
  padding: 1em 1em;
}
.banner{
  background: rgb(226, 226, 216);
  height: 50vh;
  display: grid;
  place-items: center;
  padding: 5em 0;
  box-sizing: border-box;
  background-image: url(https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  background-size: cover;
  background-position: center;
  color: white;
  & h1{
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
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>