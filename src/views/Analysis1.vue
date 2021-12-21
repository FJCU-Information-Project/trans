<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content banner">
        <h1>Analysis1</h1>
        <span>
          請選取一個您感興趣的節點，我們將會為您找出與其關聯性前五強的節點
        </span>
       <el-select v-model="value" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </el-col>
  </el-row>
  <el-row class="con_flex">
    <el-col :span="11">
        <div class="grid-content bg-purple main_sec">
        </div>
      </el-col>
    <el-col :span="12">
        <div class="grid-content bg-purple-light main_sec">
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
};
</script>

<style lang="scss">
.con_flex{
  display: flex;
  justify-content: space-evenly;
  padding: 1.25em 0;
}
.main_sec{
  height: 100vh;
}
.banner{
  background: rgb(226, 226, 216);
  height: 50vh;
  display: grid;
  place-items: center;
  padding: 5em 0;
  box-sizing: border-box;
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