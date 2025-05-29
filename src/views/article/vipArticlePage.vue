<template>
  <div class="head">
    <el-tabs v-model="activeName" class="mainTab">
      <el-tab-pane label="全部" name="all">全部</el-tab-pane>
      <el-tab-pane label="后端" name="end">后端</el-tab-pane>
      <el-tab-pane label="前端" name="front">前端</el-tab-pane>
      <el-tab-pane label="移动开发" ame="mobile">移动开发</el-tab-pane>
      <el-tab-pane label="编程语言" name="language">编程语言</el-tab-pane>
      <el-tab-pane label="Java" name="java">Java</el-tab-pane>
      <el-tab-pane label="Python" name="python">Python</el-tab-pane>
      <el-tab-pane label="人工智能" name="ai">人工智能</el-tab-pane>
      <el-tab-pane label="AIGC" name="aigc">AIGC</el-tab-pane>
      <el-tab-pane label="大数据" name="data">大数据</el-tab-pane>
      <el-tab-pane label="数据库" name="db">数据库</el-tab-pane>
      <el-tab-pane label="数据结构与算法" name="algorithm"
        >数据结构与算法</el-tab-pane
      >
      <el-tab-pane label="音视频" name="audio">音视频</el-tab-pane>
      <el-tab-pane label="云原生" name="cloud">云原生</el-tab-pane>
      <el-tab-pane label="云平台" name="cloudPlatform">云平台</el-tab-pane>
      <el-tab-pane label="前沿技术" name="newTec">前沿技术</el-tab-pane>
      <el-tab-pane label="开源" name="openSource">开源</el-tab-pane>
      <el-tab-pane label="小程序" name="smallProgram">小程序</el-tab-pane>
      <el-tab-pane label="运维" name="runCheck">运维</el-tab-pane>
      <el-tab-pane label="服务器" name="server">服务器</el-tab-pane>
      <el-tab-pane label="操作系统" name="os">操作系统</el-tab-pane>
      <el-tab-pane label="硬件开发" name="hardware">硬件开发</el-tab-pane>
      <el-tab-pane label="嵌入式" name="embedded">嵌入式</el-tab-pane>
      <el-tab-pane label="微软技术" name="microsoft">微软技术</el-tab-pane>
      <el-tab-pane label="软件工程" name="software">软件工程</el-tab-pane>
      <el-tab-pane label="测试" name="test">测试</el-tab-pane>
      <el-tab-pane label="网络空间安全" name="networkSafe"
        >网络空间安全</el-tab-pane
      >
      <el-tab-pane label="网络与通信" name="communication"
        >网络与通信</el-tab-pane
      >
      <el-tab-pane label="用户体验与设计" name="custom"
        >用户体验设计</el-tab-pane
      >
      <el-tab-pane label="学习与成长" name="learn">学习与成长</el-tab-pane>
      <el-tab-pane label="搜索" name="search">搜索</el-tab-pane>
      <el-tab-pane label="开发工具" name="dev">开发工具</el-tab-pane>
      <el-tab-pane label="游戏" name="game">游戏</el-tab-pane>
      <el-tab-pane label="HarmonyOS" name="harmonyOS">HarmonyOS</el-tab-pane>
      <el-tab-pane label="区块链" name="blockchain">区块链</el-tab-pane>
      <el-tab-pane label="数学" name="math">数学</el-tab-pane>
      <el-tab-pane label="3C硬件" name="Chardware">3C硬件</el-tab-pane>
      <el-tab-pane label="资讯" name="info">资讯</el-tab-pane>
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
