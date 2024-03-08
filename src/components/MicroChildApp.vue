<script setup>
import microAppJs from "@micro-zoe/micro-app";
const route = useRoute();
const router = useRouter();
const onBack = () => {
  router.back();
};
const onJumpNotes = () => {
  microAppJs.router.push({ name: "notesChild", path: "/qrCode" });
  data.value = { age: 18 };
};
</script>

<template>
  <div>
    <el-button @click="onBack">返回</el-button>
    <el-button @click="onJumpNotes">二维码</el-button><br /><br />
  </div>
  <micro-app
    keep-alive
    :name="route.name"
    iframe
    :url="route.meta.url"
    :defaultPage="route.meta.defaultPage"
  ></micro-app>
</template>

<style lang="less" scoped></style>
