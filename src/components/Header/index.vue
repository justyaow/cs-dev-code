<template>
  <div class="header">
    <input type="text" id="search" />
    <el-button type="primary" @click="submitSearch" class="searchButton"
      ><el-icon><Search /></el-icon>搜索</el-button
    >
    <el-button type="primary" @click="submitAi" class="aiButton"
      >AI问答</el-button
    >
  </div>
</template>
<script setup></script>
<style scoped>
.header {
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #e9e9e9;
}
#search {
  width: 500px;
  height: 30px;
  border: 1px solid #e9e9e9;
  border-radius: 15px;
  background-color: rgb(246, 246, 246);
  margin-right: 20px;
}
.searchButton {
  border-radius: 15px;
  background-color: rgb(255, 98, 0);
  margin-right: 10px;
}
.aiButton {
  border-radius: 15px;
  background: linear-gradient(to right, purple, blue);
}
.searchButton:hover {
  background-color: red !important;
}
.aiButton:hover {
  background-color: purple !important;
}
</style>
