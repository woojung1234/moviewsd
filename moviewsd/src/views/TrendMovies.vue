<template>
  <div class="trend-movies">
    <div class="view-toggle">
      <button @click="toggleView('table')">Table View</button>
      <button @click="toggleView('infinite')">Infinite Scroll</button>
    </div>

    <!-- Table View -->
    <div v-if="view === 'table'" class="table-view">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
        <h3>{{ movie.title }}</h3>
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
      movies: [], // 영화 데이터
      page: 1, // 현재 페이지
      loading: false, // 로딩 상태
      view: 'table', // 현재 보기 모드 ('table' 또는 'infinite')
    };
  },
  async mounted() {
    await this.loadInitialMovies(); // 페이지 로드 시 첫 영화 목록 불러오기
  },
  methods: {
    async loadInitialMovies() {
      const apiKey = '1cc6831125c4a1baf8f809dc1f68ec14';
      try {
        this.loading = true;
        const movies = [];
        for (let i = 1; i <= 5; i++) { // 초기 5페이지 데이터 로드
          const response = await axios.get(
              `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${i}`
          );
          movies.push(...response.data.results);
        }
        this.movies = movies; // 초기 데이터 설정
      } catch (error) {
        console.error('영화 데이터를 가져오는 데 오류가 발생했습니다.', error);
      } finally {
        this.loading = false;
      }
    },
    async fetchMoreMovies() {
      const apiKey = '1cc6831125c4a1baf8f809dc1f68ec14';
      try {
        this.loading = true;
        this.page++;
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${this.page}`
        );
        this.movies = [...this.movies, ...response.data.results]; // 기존 데이터에 추가
      } catch (error) {
        console.error('영화 데이터를 추가 로드하는 데 오류가 발생했습니다.', error);
      } finally {
        this.loading = false;
      }
    },
    handleScroll(event) {
      const { scrollTop, clientHeight, scrollHeight } = event.target;
      if (scrollTop + clientHeight >= scrollHeight - 10 && !this.loading) {
        this.fetchMoreMovies(); // 스크롤이 하단에 도달 시 추가 데이터 로드
      }
    },
    toggleView(view) {
      this.view = view; // 보기 모드 변경
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

.loading {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #888;
}
</style>
