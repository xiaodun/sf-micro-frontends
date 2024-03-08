<script setup>
import { useRouter } from "vue-router";
import microApp from "@micro-zoe/micro-app";
const router = useRouter();

const onJumpVue3 = () => {
  router.push({ name: "vue3Child" });
};
const onJumpNotes = () => {
  router.push({ name: "notesChild" });
};
</script>

<template>
  <div :class="['home-page-wrap']">
    <el-button @click="onJumpNotes">sf-notes</el-button><br /><br />
    <el-button @click="onJumpVue3">sf-vue3</el-button>
  </div>
</template>

<style lang="less" scoped>
.home-page-wrap {
}
</style>
