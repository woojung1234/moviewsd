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

      <!-- 페이지네이션 (이전/다음) -->
      <div class="pagination">
        <button @click="changePage('previous')" :disabled="page === 1">이전</button>
        <span>페이지 {{ page }}</span>
        <button @click="changePage('next')">다음</button>
      </div>
    </div>

    <!-- 무한 스크롤일 때 -->
    <div v-if="viewType === 'infinite'" class="movie-list infinite-scroll" @scroll="loadMore" ref="scrollContainer">
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
      movies: [],         // 영화 목록
      page: 1,            // 현재 페이지
      loading: false,     // 로딩 상태
      itemsPerPage: 30,   // 한 페이지에 표시될 영화 개수
    };
  },
  mounted() {
    this.fetchMovies(); // 초기 데이터 가져오기
  },
  methods: {
    // 영화 데이터 가져오기
    async fetchMovies() {
      const apiKey = '1cc6831125c4a1baf8f809dc1f68ec14'; // API 키
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${this.page}`);
        this.movies = response.data.results;
      } catch (error) {
        console.error('영화 데이터를 가져오는 데 오류가 발생했습니다.', error);
      } finally {
        this.loading = false;
      }
    },

    // 보기 형식 변경 (Table View 또는 Infinite Scroll)
    changeView(type) {
      this.viewType = type;
      this.page = 1;  // 페이지 리셋
      this.movies = []; // 영화 목록 초기화
      this.fetchMovies();  // 새로 영화 목록을 가져옴
    },

    // 페이지네이션 (이전/다음) 버튼 동작
    changePage(direction) {
      if (direction === 'previous' && this.page > 1) {
        this.page--;
      } else if (direction === 'next') {
        this.page++;
      }
      this.fetchMovies();  // 페이지 변경 후 새로 영화 목록을 가져옴
    },

    // 무한 스크롤에서 더 많은 영화 로딩
    async loadMore() {
      const container = this.$refs.scrollContainer;
      const bottom = container.scrollHeight === container.scrollTop + container.clientHeight;

      if (bottom && !this.loading && this.viewType === 'infinite') {
        this.loading = true;
        this.page++;  // 페이지 증가
        try {
          const apiKey = '1cc6831125c4a1baf8f809dc1f68ec14'; // API 키
          const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${this.page}`);
          this.movies = [...this.movies, ...response.data.results];  // 기존 목록에 새 데이터 추가
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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  overflow-y: auto;
  max-height: 80vh;
}

.loading {
  text-align: center;
  font-size: 18px;
  color: #666;
}

.pagination {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  z-index: 100;
}

.pagination button {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination span {
  font-size: 18px;
  line-height: 30px;
}
</style>
