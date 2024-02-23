<script setup lang="ts">
import { ref } from "vue";
const activeName = ref("first");
</script>

<template>
  <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="User" name="first">
      <!-- <micro-app
        iframe
        name="notes"
        url="http://localhost:8000/notes"
      ></micro-app> -->
      <micro-app name="vue3" iframe url="http://localhost:5173"></micro-app>
    </el-tab-pane>
    <el-tab-pane label="Config" name="second"> </el-tab-pane>
  </el-tabs>
</template>

<style scoped>
@keyframes myAnimation {
  0% {
    transform: translate(0, 0);
    background-color: pink;
  }
  50% {
    transform: translate(0, 100px);
    background-color: pink;
  }
  75% {
    transform: translate(200px, 100px);
    background-color: blue;
  }
  100% {
    transform: translate(300px, 300px) rotate(30deg);
    opacity: 0;
  }
}

.myDiv {
  background: linear-gradient(to right, #00ffff, #0000ff, #800080);

  width: 100px;
  height: 100px;
  background-color: pink;
  animation: myAnimation 3s linear;
}

a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
