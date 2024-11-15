<template>
  <div class="search">
    <input v-model="query" @input="debouncedSearch" placeholder="영화 검색..." />
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
import { debounce } from 'lodash';

export default {
  data() {
    return {
      query: '',
      movies: [],
    };
  },
  created() {
    // 디바운싱된 searchMovies 메서드를 생성합니다
    this.debouncedSearch = debounce(this.searchMovies, 500);
  },
  methods: {
    async searchMovies() {
      if (this.query.trim()) {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_TMDB_API_KEY}&query=${this.query}&language=ko-KR`);
          this.movies = response.data.results;
        } catch (error) {
          console.error('영화 검색 오류:', error);
          this.movies = []; // 검색 결과 초기화
          // 사용자에게 에러 메시지 표시 (예시)
          alert('영화 검색에 실패했습니다. 다시 시도해주세요.');
        }
      } else {
        this.movies = [];  // 검색어가 비어 있으면 결과를 비웁니다
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
