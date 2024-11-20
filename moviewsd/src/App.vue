<template>
  <nav>
    <router-link to="/">홈</router-link> |
    <router-link to="/popular">인기 영화</router-link> |
    <router-link to="/search">검색하기</router-link> |
    <router-link to="/wishlist">좋아하는 영화</router-link> |
    <router-link to="/signin">로그인</router-link>
  </nav>
  <router-view/>
</template>

<script setup lang="ts">
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup lang="ts">
</script>