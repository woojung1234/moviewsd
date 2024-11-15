<template>
  <div class="genre-filter">
    <h1>장르별 영화 필터링</h1>
    <select v-model="selectedGenre" @change="filterByGenre">
      <option value="">전체 장르</option>
      <option v-for="genre in genres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
    </select>

    <div v-if="movies.length">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.overview }}</p>
      </div>
    </div>
    <p v-else>장르에 맞는 영화가 없습니다.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      genres: [],
      selectedGenre: '',
      movies: [],
    };
  },
  mounted() {
    this.fetchGenres();
  },
  methods: {
    async fetchGenres() {
      const apiKey = 'YOUR_API_KEY';
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=ko-KR`);
        this.genres = response.data.genres;
      } catch (error) {
        console.error('장르 목록 불러오기 오류:', error);
      }
    },
    async filterByGenre() {
      const apiKey = 'YOUR_API_KEY';
      if (!this.selectedGenre) {
        this.movies = [];
        return;
      }
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${this.selectedGenre}&language=ko-KR`);
        this.movies = response.data.results;
      } catch (error) {
        console.error('장르별 영화 필터링 오류:', error);
      }
    },
  },
};
</script>

<style scoped>
.genre-filter {
  text-align: center;
}
.movie-card {
  display: inline-block;
  width: 200px;
  margin: 10px;
  text-align: center;
}
.movie-card img {
  width: 100%;
  border-radius: 10px;
}
.movie-card h3 {
  font-size: 16px;
  margin: 10px 0;
}
</style>
