<template>
  <div class="movies">
    <h1>영화 목록</h1>
    <div class="movie-list">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      const apiKey = '1cc6831125c4a1baf8f809dc1f68ec14';  // 여기에 API 키를 입력하세요
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=1`);
        this.movies = response.data.results;
      } catch (error) {
        console.error('영화 데이터를 가져오는 데 오류가 발생했습니다.', error);
      }
    },
  },
};
</script>

<style scoped>
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
