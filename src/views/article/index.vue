<template>
  <Header />
  <div class="head">
    <el-radio-group v-model="radio">
      <el-radio-button label="推荐" value="recommend" class="recommendButton" />
      <el-radio-button label="付费专栏" value="payPart" class="payPartButton" />
      <el-radio-button
        label="VIP文章"
        value="vipArticle"
        class="vipArticleButton"
      />
    </el-radio-group>
  </div>
  <div class="content">
    <div v-if="radio === 'recommend'">
      <recommendPage />
    </div>
    <div v-else-if="radio === 'payPart'">
      <payPartPage />
    </div>
    <div v-else>
      <vipArticlePage />
    </div>
  </div>
</template>
<script setup>
import Header from "@/components/Header/index.vue";
import recommendPage from "@/views/article/recommendPage.vue";
import payPartPage from "@/views/article/payPartPage.vue";
import vipArticlePage from "@/views/article/vipArticlePage.vue";
import { ref } from "vue";

const radio = ref("recommend");
</script>
<style scoped>
.head {
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 10px;
  margin-left: 30px;
}
.recommendButton :deep(.el-radio-button__inner) {
  border-radius: 10px !important;
  margin-right: 20px;
}
.payPartButton :deep(.el-radio-button__inner) {
  border-radius: 10px !important;
  margin-right: 20px;
}
.vipArticleButton :deep(.el-radio-button__inner) {
  border-radius: 10px !important;
  margin-right: 20px;
}
/* .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
} */
</style>
