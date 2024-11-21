<template>
  <nav class="header">
    <router-link to="/">홈</router-link> |
    <router-link to="/popular">인기 영화</router-link> |
    <router-link to="/search">검색하기</router-link> |
    <router-link to="/wishlist">좋아하는 영화</router-link> |
    <button v-if="isLoggedIn" @click="logout">로그아웃</button>
    <router-link v-else to="/signin">로그인</router-link>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

// Vuex의 isLoggedIn 상태를 가져옴
const isLoggedIn = computed(() => store.getters.isLoggedIn);

// 로그아웃 함수
const logout = () => {
  store.dispatch('logout'); // Vuex의 로그아웃 액션 호출
  router.push('/signin'); // 로그인 페이지로 리다이렉트
};
</script>

<style scoped>
.header {
  padding: 20px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.header a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}

.header a.router-link-exact-active {
  color: #42b983;
}

button {
  background: none;
  border: none;
  color: #007bff;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  text-decoration: underline;
}
</style>

