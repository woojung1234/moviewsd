<template>
  <div class="trend-movies">
    <div class="view-toggle">
      <button @click="toggleView('table')">Table View</button>
      <button @click="toggleView('infinite')">Infinite Scroll</button>
    </div>

    <!-- Table View -->
    <div v-if="view === 'table'" class="table-view">
      <div v-for="movie in paginatedMovies" :key="movie.id" class="movie-card">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
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
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
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
      currentPage: 1, // 현재 페이지
      itemsPerPage: 10, // 기본 페이지당 영화 개수 (가로 * 세로)
      view: 'table', // 현재 뷰 ('table' or 'infinite')
      loading: false, // 로딩 상태
    };
  },
  computed: {
    // 한 페이지에 표시할 영화 데이터
    paginatedMovies() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.movies.slice(startIndex, endIndex);
    },
    // 총 페이지 수
    totalPages() {
      return Math.ceil(this.movies.length / this.itemsPerPage);
    },
  },
  watch: {
    // 뷰포트 크기가 변경되면 영화 개수 재계산
    '$root.$el.clientWidth': 'calculateItemsPerPage',
    '$root.$el.clientHeight': 'calculateItemsPerPage',
  },
  methods: {
    async fetchMovies() {
      try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=1cc6831125c4a1baf8f809dc1f68ec14&language=ko-KR&page=1`
        );
        this.movies = response.data.results;
        this.calculateItemsPerPage();
      } catch (error) {
        console.error('영화 데이터를 가져오는 데 실패했습니다.', error);
      }
    },
    // 현재 뷰 변경
    toggleView(viewType) {
      this.view = viewType;
    },
    // 이전 페이지 이동
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    // 다음 페이지 이동
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    // 무한 스크롤 핸들링
    async handleScroll(event) {
      const scrollable = event.target.scrollHeight - event.target.clientHeight;
      const scrolled = event.target.scrollTop;
      if (scrollable - scrolled <= 100 && !this.loading) {
        this.loading = true;
        // Fetch next page or append more data
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }
    },
    // 페이지 크기에 따른 itemsPerPage 재계산
    calculateItemsPerPage() {
      const width = this.$root.$el.clientWidth;
      const height = this.$root.$el.clientHeight;
      const columns = Math.floor(width / 200); // 영화 카드 1개당 폭 200px 기준
      const rows = Math.floor(height / 300); // 영화 카드 1개당 높이 300px 기준
      this.itemsPerPage = columns * rows;
    },
  },
  mounted() {
    this.fetchMovies();
    this.calculateItemsPerPage();
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
  justify-content: space-around;
  gap: 20px;
}

.movie-card {
  width: 180px;
  text-align: center;
  border-radius: 10px;
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
