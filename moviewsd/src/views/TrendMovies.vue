<template>
  <div class="trend-movies">
    <h1>대세 콘텐츠</h1>

    <!-- 보기 형식 선택 (Table View 또는 무한 스크롤) -->
    <div class="view-options">
      <button @click="changeView('table')">Table View</button>
      <button @click="changeView('infinite')">Infinite Scroll</button>
    </div>

    <!-- Table View일 때 -->
    <div v-if="viewType === 'table'" class="movie-list table-view">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
        <h3>{{ movie.title }}</h3>
      </div>
    </div>

    <!-- 무한 스크롤일 때 -->
    <div v-if="viewType === 'infinite'" class="movie-list infinite-scroll" @scroll="loadMore">
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
      viewType: 'table',  // 초기 화면은 Table View
      movies: [],
      page: 1,
      loading: false,
    };
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      const apiKey = '1cc6831125c4a1baf8f809dc1f68ec14'; // 여기에 API 키를 입력하세요
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${this.page}`);
        this.movies = response.data.results;
      } catch (error) {
        console.error('영화 데이터를 가져오는 데 오류가 발생했습니다.', error);
      }
    },
    // 테이블/무한 스크롤 보기 선택
    changeView(type) {
      this.viewType = type;
      this.page = 1;  // 페이지 리셋
      this.movies = []; // 이전 영화 목록 초기화
      this.fetchMovies();  // 새로 영화 목록을 가져옴
    },
    // 무한 스크롤에서 스크롤이 끝에 도달하면 더 많은 영화 로드
    async loadMore(event) {
      const bottom = event.target.scrollHeight === event.target.scrollTop + event.target.clientHeight;
      if (bottom && !this.loading) {
        this.loading = true;
        this.page++;
        try {
          const apiKey = '1cc6831125c4a1baf8f809dc1f68ec14'; // 여기에 API 키를 입력하세요
          const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${this.page}`);
          this.movies = [...this.movies, ...response.data.results];
        } catch (error) {
          console.error('영화 데이터를 가져오는 데 오류가 발생했습니다.', error);
        } finally {
          this.loading = false;
        }
      }
    },
  },
};
</script>

<style scoped>
.trend-movies {
  text-align: center;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.view-options button {
  margin: 10px;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}

.view-options button:hover {
  background-color: #369f6d;
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.movie-card {
  width: 200px;
  margin: 10px;
  text-align: center;
}

.movie-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

.movie-card h3 {
  font-size: 16px;
  margin-top: 10px;
}

.table-view .movie-card {
  width: 200px;
}

.infinite-scroll {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3x3 무한 스크롤 */
  gap: 20px;
}

.loading {
  text-align: center;
  font-size: 18px;
  color: #666;
}
</style>
