<template>
  <div>
    <h1>Movie List</h1>
    <div v-if="movies.length">
      <div v-for="movie in movies" :key="movie.id">
        <h3>{{ movie.title }}</h3>
        <img :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path" alt="Movie Poster" />
        <p>{{ movie.overview }}</p>
      </div>
    </div>
    <p v-else>Loading movies...</p>
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
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: '1cc6831125c4a1baf8f809dc1f68ec14', // 여기에 제공된 API 키를 사용
          },
        });
        this.movies = response.data.results;
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },
  },
};
</script>
