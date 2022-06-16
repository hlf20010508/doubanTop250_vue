<template>
  <div class="main">
    <el-row>
      <h1>豆瓣电影Top250</h1>
    </el-row>
    <el-row class="main-content">
      <el-col :span="6">
        <el-menu router class="main-menu" :default-active="$route.path">
          <el-menu-item index="/bar">
            <span slot="title">年份-电影数量 柱状图</span>
          </el-menu-item>
          <el-menu-item index="/pie">
            <span slot="title">电影类型 饼图</span>
          </el-menu-item>
          <el-menu-item index="/wordcloud">
            <span slot="title">各个国家上映情况 词云</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <div>
          <router-view />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style>
.main {
  height: 400px;
}
.main-content {
  margin-top: 20px;
}
.main-menu {
  height: 400px;
}
</style>