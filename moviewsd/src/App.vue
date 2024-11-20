<template>
  <div id="app">
    <!-- 공통 헤더 컴포넌트 -->
    <AppHeader />
    <!-- 라우터 뷰 -->
    <router-view />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'; // Header 컴포넌트 추가
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
