<template>
  <div class="search">
    <!-- 필터 및 검색 -->
    <div class="search-filters">
      <input v-model="query" @input="debouncedSearch" placeholder="영화 검색..." />

      <select v-model="selectedGenre" @change="applyFilters">
        <option value="">장르 선택</option>
        <option v-for="genre in genres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
      </select>

      <input
          type="number"
          v-model="minRating"
          @input="applyFilters"
          placeholder="최소 평점 (0 ~ 10)"
          min="0"
          max="10"
      />

      <input type="date" v-model="releaseDate" @change="applyFilters" />
    </div>

    <!-- 영화 목록 -->
    <div class="movie-list" ref="scrollContainer" @scroll="handleScroll">
      <div v-for="movie in filteredMovies" :key="movie.id" class="movie-card">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.overview }}</p>
      </div>
      <div v-if="loading" class="loading">로딩 중...</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { debounce } from 'lodash';

export default {
  data() {
    return {
      movies: [],
      allMovies: [],
      genres: [],
      selectedGenre: '',
      minRating: '',
      releaseDate: '',
      query: '',
      page: 1,
      loading: false,
      isEndOfData: false, // 더 이상 불러올 데이터가 없는지 확인
    };
  },
  created() {
    this.debouncedSearch = debounce(this.searchMovies, 500);
    this.fetchGenres();
    this.loadInitialMovies(); // 초기 영화 데이터 로드
  },
  computed: {
    filteredMovies() {
      // 필터 조건 적용
      return this.movies.filter((movie) => {
        const matchesGenre =
            !this.selectedGenre || movie.genre_ids.includes(parseInt(this.selectedGenre));

        const matchesRating =
            !this.minRating || movie.vote_average >= parseFloat(this.minRating);

        const matchesReleaseDate =
            !this.releaseDate || movie.release_date >= this.releaseDate;

        return matchesGenre && matchesRating && matchesReleaseDate;
      });
    },
  },
  methods: {
    async fetchGenres() {
      const apiKey = process.env.VUE_APP_TMDB_API_KEY;
      try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=ko-KR`
        );
        this.genres = response.data.genres;
      } catch (error) {
        console.error('장르 목록 가져오기 실패:', error);
      }
    },
    async loadInitialMovies() {
      const apiKey = process.env.VUE_APP_TMDB_API_KEY;
      try {
        this.loading = true;
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${this.page}`
        );
        this.allMovies = [...this.allMovies, ...response.data.results];
        this.movies = [...this.allMovies];
        if (response.data.results.length === 0) {
          this.isEndOfData = true;
        }
      } catch (error) {
        console.error('초기 영화 데이터 로드 실패:', error);
      } finally {
        this.loading = false;
      }
    },
    handleScroll() {
      const container = this.$refs.scrollContainer;
      if (
          container.scrollTop + container.clientHeight >= container.scrollHeight &&
          !this.loading &&
          !this.isEndOfData
      ) {
        this.page++;
        this.loadInitialMovies(); // 다음 페이지의 영화 데이터 로드
      }
    },
    applyFilters() {
      // 필터를 적용한 뒤 결과를 업데이트
      this.movies = this.allMovies;
    },
    async searchMovies() {
      const apiKey = process.env.VUE_APP_TMDB_API_KEY;
      if (this.query.trim()) {
        try {
          const response = await axios.get(
              `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.query}&language=ko-KR`
          );
          this.movies = response.data.results;
        } catch (error) {
          console.error('영화 검색 오류:', error);
        }
      } else {
        // 검색어가 비어 있으면 초기 데이터로 복원
        this.movies = this.allMovies;
      }
    },
  },
};
</script>

<style scoped>
.search-filters {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
}

.movie-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  overflow-y: auto;
  max-height: 80vh;
}

.movie-card {
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.movie-card img {
  max-width: 100%;
  border-radius: 5px;
}

.loading {
  text-align: center;
  font-size: 18px;
  color: #555;
}
</style>