<template>
  <div class="movies">
    <h1>영화 목록</h1>

    <!-- 로딩 상태 표시 -->
    <div v-if="loading" class="loading">로딩 중...</div>

    <!-- 영화 목록이 로드되었을 때만 표시 -->
    <div class="movie-list" v-else>
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <router-link :to="{ name: 'movie-details', params: { id: movie.id } }">
          <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
          <h3>{{ movie.title }}</h3>
          <p>{{ movie.overview }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      movies: [], // 영화 목록
      loading: true,  // 데이터 로딩 중 상태
    };
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      const apiKey = process.env.VUE_APP_TMDB_API_KEY;
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=1`);
        this.movies = response.data.results;
      } catch (error) {
        console.error('영화 데이터를 가져오는 데 오류가 발생했습니다.', error);
      } finally {
        this.loading = false;  // 로딩 완료 후 상태 변경
      }
    },
  },
};
</script>

<style scoped>
.loading {
  font-size: 20px;
  color: #555;
  text-align: center;
  margin-top: 50px;
}

.movies {
  text-align: center;
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.movie-card {
  width: 200px;
  margin: 20px;
  text-align: center;
}

.movie-card img {
  width: 100%;
  border-radius: 10px;
}

.movie-card h3 {
  font-size: 18px;
  margin: 10px 0;
}

.movie-card p {
  font-size: 14px;
  color: #555;
}
</style>
