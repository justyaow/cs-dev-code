<template>
  <el-container class="container">
    <el-aside class="aside">
      <div class="head">
        <img src="@/assets/vue.svg" alt="logo" />
        <span>c s 论 坛</span>
      </div>
      <div class="line" />
      <el-menu
        background-color="rgb(246, 246, 246)"
        text-color="black"
        :router="true"
      >
        <el-menu-item index="/"
          ><el-icon><House /></el-icon>首页</el-menu-item
        >
        <el-menu-item index="/article"
          ><el-icon><Document /></el-icon>博客</el-menu-item
        >
        <el-menu-item index="/download"
          ><el-icon><Download /></el-icon>下载</el-menu-item
        >
        <el-menu-item index="/learn"
          ><el-icon><Reading /></el-icon>学习</el-menu-item
        >
        <el-menu-item index="/community"
          ><el-icon><ChatLineSquare /></el-icon>社区</el-menu-item
        >
        <div class="line" />
        <el-menu-item index="/chat"
          ><el-icon><ChatLineRound /></el-icon>AI问答</el-menu-item
        >
        <div class="line" />
        <el-menu-item index="/subscription"
          ><el-icon><Tickets /></el-icon>订阅</el-menu-item
        >
        <el-menu-item index="/focus"
          ><el-icon><UserFilled /></el-icon>关注</el-menu-item
        >
        <el-menu-item index="/collect"
          ><el-icon><StarFilled /></el-icon>收藏</el-menu-item
        >
        <el-menu-item index="/history"
          ><el-icon><Clock /></el-icon>历史</el-menu-item
        >
        <el-menu-item index="/create"
          ><el-icon><Opportunity /></el-icon>创作中心</el-menu-item
        >
      </el-menu>
    </el-aside>
    <el-container class="content">
      <router-view />
    </el-container>
  </el-container>
</template>

<script setup></script>

<style scoped>
.container {
  min-height: 98vh;
  background-color: #fff;
}
.aside {
  width: 250px !important;
  background-color: rgb(246, 246, 246);
}
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}
.head img {
  height: 50px;
  width: 50px;
  margin-right: 12px;
}
.head span {
  font-size: 20px;
  color: black;
  font-weight: bold;
}
.line {
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.content {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
}
</style>
