<template>
  <div class="search">
    <input v-model="query" @input="searchMovies" placeholder="영화 검색..." />
    <div v-if="movies.length > 0" class="movie-list">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.overview }}</p>
      </div>
    </div>
    <div v-else>
      <p>검색 결과가 없습니다.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      query: '',
      movies: []
    };
  },
  methods: {
    async searchMovies() {
      if (this.query.trim()) {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_TMDB_API_KEY}&query=${this.query}&language=ko-KR`);
          this.movies = response.data.results;
        } catch (error) {
          console.error('영화 검색 오류:', error);
        }
      }
    }
  }
};
</script>

<style scoped>
.search {
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
