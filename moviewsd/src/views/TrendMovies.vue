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
      itemsPerPage: 12, // 페이지당 영화 개수
      totalPages: 1, // 총 페이지 수
      loading: false, // 로딩 상태
      view: 'table', // 현재 보기 모드 ('table' 또는 'infinite')
      infiniteScrollPage: 1, // 무한 스크롤의 현재 페이지
    };
  },
  computed: {
    paginatedMovies() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.movies.slice(start, end); // 현재 페이지의 영화 데이터 반환
    },
  },
  async mounted() {
    await this.loadInitialMovies(); // 첫 영화 목록 불러오기
  },
  methods: {
    async loadInitialMovies() {
      const apiKey = '1cc6831125c4a1baf8f809dc1f68ec14';
      try {
        this.loading = true;
        const movies = [];
        for (let i = 1; i <= 5; i++) {
          const response = await axios.get(
              `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${i}`
          );
          movies.push(...response.data.results);
        }
        this.movies = movies; // 전체 영화 데이터 저장
        this.totalPages = Math.ceil(this.movies.length / this.itemsPerPage); // 총 페이지 수 계산
      } catch (error) {
        console.error('영화 데이터를 가져오는 데 오류가 발생했습니다.', error);
      } finally {
        this.loading = false;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    async fetchMoreMovies() {
      const apiKey = '1cc6831125c4a1baf8f809dc1f68ec14';
      try {
        this.loading = true;
        this.infiniteScrollPage++;
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${this.infiniteScrollPage}`
        );
        this.movies = [...this.movies, ...response.data.results];
      } catch (error) {
        console.error('영화 데이터를 추가 로드하는 데 오류가 발생했습니다.', error);
      } finally {
        this.loading = false;
      }
    },
    handleScroll(event) {
      const { scrollTop, clientHeight, scrollHeight } = event.target;
      if (scrollTop + clientHeight >= scrollHeight - 10 && !this.loading) {
        this.fetchMoreMovies();
      }
    },
    toggleView(view) {
      this.view = view;
    },
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

.view-toggle button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.table-view {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 한 줄에 4개 */
  gap: 20px;
}

.infinite-scroll {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 한 줄에 3개 */
  gap: 20px;
  max-height: 600px;
  overflow-y: auto;
}

.movie-card {
  text-align: center;
}

.movie-card img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.pagination button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.loading {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #888;
}
</style>
