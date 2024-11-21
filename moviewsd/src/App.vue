<template>
  <div id="app">
    <!-- 공통 헤더 컴포넌트 -->
    <AppHeader v-if="isAppVisible" />
    <!-- 라우터 뷰 -->
    <router-view />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();
const isAppVisible = ref(false); // 헤더 표시 여부

onMounted(async () => {
  // Vuex 상태 복원
  await store.dispatch('loadAuthState');

  // 로그인 상태 확인
  if (!store.getters.isLoggedIn) {
    // 로그인 상태가 아니면 로그인 페이지로 리다이렉트
    router.push('/signin');
  } else {
    isAppVisible.value = true; // 로그인 상태일 경우 헤더 표시
  }
});
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
