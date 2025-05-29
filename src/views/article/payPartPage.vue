<template>
  <div class="head">
    <el-tabs v-model="activeName" class="mainTab">
      <el-tab-pane label="全部" name="all">全部</el-tab-pane>
      <el-tab-pane label="大数据/云计算" name="dataCloud"
        >大数据/云计算</el-tab-pane
      >
      <el-tab-pane label="算法与数据机构" name="algorithm"
        >算法与数据结构</el-tab-pane
      >
      <el-tab-pane label="数据科学" name="dataScience">数据科学</el-tab-pane>
      <el-tab-pane label="物联网" name="things">物联网</el-tab-pane>
      <el-tab-pane label="项目管理与协作工具" name="project"
        >项目管理与协作工具</el-tab-pane
      >
      <el-tab-pane label="区块链技术" name="blockChain">区块链技术</el-tab-pane>
      <el-tab-pane label="人工智能" name="ai">人工智能</el-tab-pane>
      <el-tab-pane label="操作系统" name="os">操作系统</el-tab-pane>
      <el-tab-pane label="运维" name="runCheck">运维</el-tab-pane>
      <el-tab-pane label="测试" name="test">测试</el-tab-pane>
      <el-tab-pane label="音视频开发" name="audio">音视频开发</el-tab-pane>
      <el-tab-pane label="嵌入式与硬件开发" name="hardware"
        >嵌入式与硬件开发</el-tab-pane
      >
      <el-tab-pane label="编程语言" name="language">编程语言</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup>
import { ref } from "vue";

const activeName = ref("all");
</script>
<style scoped>
.head {
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 30px;
  margin-top: 10px;
  padding: 0;
}
.mainTab {
  overflow: auto;
}
</style>
