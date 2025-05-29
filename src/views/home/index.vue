<template>
  <Header />
  <div class="head">
    <el-radio-group v-model="radio">
      <el-radio-button label="全部" value="all" class="allButton" />
      <el-radio-button label="资讯" value="info" class="infoButton" />
      <el-radio-button
        label="DeepSeek"
        value="deepseek"
        class="deepseekButton"
      />
      <el-radio-button label="运维" value="runCheck" class="runCheckButton" />
      <el-radio-button label="操作系统" value="os" class="osButton" />
      <el-radio-button label="人工智能" value="ai" class="aiButton" />
      <el-radio-button label="Java" value="java" class="javaButton" />
      <el-radio-button label="C++" value="cpp" class="cppButton" />
      <el-radio-button label="Python" value="python" class="pythonButton" />
      <el-radio-button
        label="数据结构与算法"
        value="algorithm"
        class="algorithmButton"
      />
      <el-radio-button label="后端" value="end" class="endButton" />
      <el-radio-button label="前端" value="front" class="frontButton" />
    </el-radio-group>
  </div>
  <div class="content">
    <div v-if="radio === 'all'">
      <allPage />
    </div>
    <div v-else-if="radio === 'info'">
      <infoPage />
    </div>
    <div v-else-if="radio === 'deepseek'">
      <deepseekPage />
    </div>
    <div v-else-if="radio === 'runCheck'">
      <runCheckPage />
    </div>
    <div v-else-if="radio === 'os'">
      <osPage />
    </div>
    <div v-else-if="radio === 'ai'">
      <aiPage />
    </div>
    <div v-else-if="radio === 'java'">
      <javaPage />
    </div>
    <div v-else-if="radio === 'cpp'">
      <cppPage />
    </div>
    <div v-else-if="radio === 'python'">
      <pythonPage />
    </div>
    <div v-else-if="radio === 'algorithm'">
      <algorithmPage />
    </div>
    <div v-else-if="radio === 'end'">
      <endPage />
    </div>
    <div v-else>
      <frontPage />
    </div>
  </div>
</template>
<script setup>
import Header from "@/components/Header/index.vue";
import allPage from "@/views/home/allPage.vue";
import infoPage from "@/views/home/infoPage.vue";
import deepseekPage from "@/views/home/deepseekPage.vue";
import runCheckPage from "@/views/home/runCheckPage.vue";
import osPage from "@/views/home/osPage.vue";
import aiPage from "@/views/home/aiPage.vue";
import javaPage from "@/views/home/javaPage.vue";
import cppPage from "@/views/home/cppPage.vue";
import pythonPage from "@/views/home/pythonPage.vue";
import algorithmPage from "@/views/home/algorithmPage.vue";
import endPage from "@/views/home/endPage.vue";
import frontPage from "@/views/home/frontPage.vue";
import { ref } from "vue";

const radio = ref("all");
</script>
<style scoped>
.head {
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 30px;
  margin-top: 10px;
}
/* .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: auto;
} */
.allButton :deep(.el-radio-button__inner) {
  margin-right: 20px;
  border-radius: 10px !important;
}
.infoButton :deep(.el-radio-button__inner) {
  margin-right: 20px;
  border-radius: 10px !important;
}
.deepseekButton :deep(.el-radio-button__inner) {
  margin-right: 20px;
  border-radius: 10px !important;
}
.runCheckButton :deep(.el-radio-button__inner) {
  margin-right: 20px;
  border-radius: 10px !important;
}
.osButton :deep(.el-radio-button__inner) {
  margin-right: 20px;
  border-radius: 10px !important;
}
.aiButton :deep(.el-radio-button__inner) {
  margin-right: 20px;
  border-radius: 10px !important;
}
.javaButton :deep(.el-radio-button__inner) {
  margin-right: 20px;
  border-radius: 10px !important;
}
.cppButton :deep(.el-radio-button__inner) {
  margin-right: 20px;
  border-radius: 10px !important;
}
.pythonButton :deep(.el-radio-button__inner) {
  margin-right: 20px;
  border-radius: 10px !important;
}
.algorithmButton :deep(.el-radio-button__inner) {
  margin-right: 20px;
  border-radius: 10px !important;
}
.endButton :deep(.el-radio-button__inner) {
  margin-right: 20px;
  border-radius: 10px !important;
}
.frontButton :deep(.el-radio-button__inner) {
  margin-right: 20px;
  border-radius: 10px !important;
}
</style>
