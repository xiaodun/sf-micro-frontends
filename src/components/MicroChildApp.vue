import { log } from 'console'; import { useRouter } from 'vue-router';
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.name);
</script>

<template>
  <micro-app :name="route.name" iframe :url="route.meta.url"></micro-app>
</template>

<style lang="less" scoped></style>
