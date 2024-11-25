<template>
  <nav class="header" @mouseover="hoverHeader(true)" @mouseleave="hoverHeader(false)">
    <router-link to="/">홈</router-link> |
    <router-link to="/popular">인기 영화</router-link> |
    <router-link to="/search">검색하기</router-link> |
    <router-link to="/wishlist">좋아하는 영화</router-link> |
    <button v-if="isLoggedIn" @click="logout">로그아웃</button>
    <router-link v-else to="/signin">로그인</router-link>
  </nav>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const isLoggedIn = computed(() => store.getters.isLoggedIn);

// 헤더 상태: 마우스 호버 시 스타일 변경
const isHeaderHovered = ref(false);

const hoverHeader = (isHovered) => {
  isHeaderHovered.value = isHovered;
};

const logout = () => {
  store.dispatch("logout");
  router.push("/signin");
};
</script>

<style scoped>
.header {
  padding: 20px;
  background-color: #1f1f1f; /* 기본 색상 */
  display: flex;
  justify-content: center;
  gap: 10px;
  transition: background-color 0.3s ease; /* 배경색 전환 효과 */
}

/* 헤더 호버 상태 */
.header:hover {
  background-color: #343434; /* 진한 색상 */
}

.header a {
  text-decoration: none;
  font-weight: bold;
  color: #e6e6e6; /* 링크 색상 */
  transition: transform 0.3s ease, color 0.3s ease; /* 확대 효과 추가 */
}

.header a.router-link-exact-active {
  color: #f5b041; /* 활성화된 링크 색상 */
}

/* 버튼 스타일 */
button {
  background: none;
  border: none;
  color: #e6e6e6;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease; /* 확대 효과 추가 */
}

/* 버튼과 링크에 마우스를 올릴 때 효과 */
button:hover,
.header a:hover {
  transform: scale(1.1); /* 버튼 및 링크 확대 */
  color: #ffbf00; /* 호버 시 강조 색상 */
}
</style>


