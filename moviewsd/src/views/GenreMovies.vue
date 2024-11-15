<template>
  <div class="genre-movies">
    <h1>{{ genreName }} 장르 영화</h1>
    <div v-if="movies.length > 0" class="movie-list">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.overview }}</p>
      </div>
    </div>
    <div v-else>
      <p>장르 영화가 없습니다.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['genreId'],
  data() {
    return {
      genreName: '',
      movies: []
    };
  },
  async created() {
    try {
      const genreResponse = await axios.get(`https://api.themoviedb.org/3/genre/${this.genreId}?api_key=${process.env.VUE_APP_TMDB_API_KEY}`);
      this.genreName = genreResponse.data.name;

      const moviesResponse = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_TMDB_API_KEY}&with_genres=${this.genreId}`);
      this.movies = moviesResponse.data.results;
    } catch (error) {
      console.error('장르 영화 목록 로드 오류:', error);
      this.movies = [];
      alert('장르 영화를 불러오는 데 실패했습니다.');
    }
  }
};
</script>

<style scoped>
.genre-movies {
  text-align: center;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
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

.genre-movies p {
  font-size: 16px;
  color: #888;
}
</style>


