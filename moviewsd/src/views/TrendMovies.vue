<template>
  <div class="trend-movies">
    <div class="view-toggle">
      <button @click="toggleView('table')">Table View</button>
      <button @click="toggleView('infinite')">Infinite Scroll</button>
    </div>

    <!-- Table View -->
    <div v-if="view === 'table'" class="table-view">
      <div v-for="movie in paginatedMovies" :key="movie.id" class="movie-card">
        <img :src="getMoviePoster(movie)" :alt="movie.title" />
        <h3>{{ movie.title }}</h3>
      </div>
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">이전</button>
        <span>{{ currentPage }} / {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">다음</button>
      </div>
    </div>

    <!-- Infinite Scroll View -->
    <div v-else class="infinite-scroll" @scroll="handleScroll">
      <div v-for="movie in displayedMovies" :key="movie.id" class="movie-card">
        <img :src="getMoviePoster(movie)" :alt="movie.title" />
        <h3>{{ movie.title }}</h3>
      </div>
      <div v-if="loading" class="loading">Loading...</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      movies: [], // 전체 영화 데이터
      currentPage: 1, // 현재 페이지 번호
      itemsPerPage: 10, // 기본 페이지당 영화 개수
      view: 'table', // 현재 뷰 ('table' or 'infinite')
      loading: false, // 무한 스크롤 로딩 상태
      displayedMovies: [], // 무한 스크롤에서 표시되는 영화
    };
  },
  computed: {
    // Table View에서 한 페이지의 영화 데이터
    paginatedMovies() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.movies.slice(startIndex, endIndex);
    },
    // Table View에서 총 페이지 수
    totalPages() {
      return Math.ceil(this.movies.length / this.itemsPerPage);
    },
  },
  methods: {
    // 영화 포스터 경로를 얻는 메서드
    getMoviePoster(movie) {
      const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/200x300?text=No+Image'; // 기본 이미지 처리
      return posterUrl;
    },
    async fetchMovies() {
      try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=1cc6831125c4a1baf8f809dc1f68ec14&language=ko-KR&page=1`
        );
        console.log(response.data); // API 호출 결과 확인
        this.movies = response.data.results;
        this.calculateItemsPerPage(); // 페이지 크기 재조정
        this.updateDisplayedMovies();
      } catch (error) {
        console.error('영화 데이터를 가져오는 데 실패했습니다.', error);
      }
    },
    toggleView(viewType) {
      this.view = viewType;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    handleScroll(event) {
      const scrollable = event.target.scrollHeight - event.target.clientHeight;
      const scrolled = event.target.scrollTop;
      if (scrollable - scrolled <= 100 && !this.loading) {
        this.loading = true;
        setTimeout(() => {
          this.updateDisplayedMovies();
          this.loading = false;
        }, 1000);
      }
    },
    updateDisplayedMovies() {
      const startIndex = this.displayedMovies.length;
      const nextMovies = this.movies.slice(
          startIndex,
          startIndex + this.itemsPerPage
      );
      this.displayedMovies.push(...nextMovies);
    },
    calculateItemsPerPage() {
      const width = this.$root.$el.clientWidth;
      const height = this.$root.$el.clientHeight;
      const columns = Math.floor(width / 200); // 1열에 표시되는 포스터 수 (200px 기준)
      const rows = Math.floor(height / 300); // 1행에 표시되는 포스터 수 (300px 기준)
      this.itemsPerPage = columns * rows; // 한 페이지에 표시되는 총 포스터 수
    },
  },
  mounted() {
    this.fetchMovies();
    window.addEventListener('resize', this.calculateItemsPerPage);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.calculateItemsPerPage);
  },
};
</script>

<style scoped>
.trend-movies {
  padding: 20px;
  text-align: center;
}

.view-toggle {
  margin-bottom: 20px;
}

.table-view,
.infinite-scroll {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.movie-card {
  width: 200px; /* 포스터 고정 크기 */
  text-align: center;
  overflow: hidden;
}

.movie-card img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.movie-card h3 {
  margin: 10px 0;
  font-size: 14px;
}

.pagination {
  margin-top: 20px;
}

.loading {
  text-align: center;
  font-size: 16px;
  color: #888;
}
</style>
