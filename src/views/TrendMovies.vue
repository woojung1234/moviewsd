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
      <div v-for="movie in paginatedMovies" :key="movie.id" class="movie-card">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
        <h3>{{ movie.title }}</h3>
      </div>

      <!-- 페이지네이션 (이전/다음) -->
      <div class="pagination">
        <button @click="changePage('previous')" :disabled="page === 1">이전</button>
        <span>페이지 {{ page }}</span>
        <button @click="changePage('next')" :disabled="page * itemsPerPage >= totalResults">다음</button>
      </div>
    </div>

    <!-- 무한 스크롤일 때 -->
    <div
        v-if="viewType === 'infinite'"
        class="movie-list infinite-scroll"
        @scroll="loadMore"
        ref="scrollContainer"
    >
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
      movies: [],          // 전체 영화 목록
      page: 1,             // 현재 페이지
      loading: false,      // 로딩 상태
      itemsPerPage: 20,    // 페이지당 영화 개수
      totalResults: 0,     // 전체 영화 수
    };
  },
  mounted() {
    this.fetchMovies(); // 초기 데이터 가져오기
  },
  computed: {
    // 테이블 페이지에서 현재 페이지에 맞는 영화 목록을 반환
    paginatedMovies() {
      const startIndex = (this.page - 1) * this.itemsPerPage;
      const endIndex = this.page * this.itemsPerPage;
      return this.movies.slice(startIndex, endIndex);
    },
  },
  methods: {
    // 영화 데이터 가져오기
    async fetchMovies() {
      const apiKey = '1cc6831125c4a1baf8f809dc1f68ec14'; // TMDB API 키
      try {
        this.loading = true;
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${this.page}`);
        if (this.page === 1) {
          this.movies = response.data.results; // 첫 번째 페이지일 때는 새 데이터로 덮어씁니다.
        } else {
          this.movies.push(...response.data.results); // 이후 페이지는 기존 목록에 추가
        }
        this.totalResults = response.data.total_results;  // 전체 영화 개수 업데이트
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
      } else if (direction === 'next' && this.page * this.itemsPerPage < this.totalResults) {
        this.page++;
      }
      this.fetchMovies();  // 페이지 변경 후 새로 영화 목록을 가져옴
    },

    // 무한 스크롤에서 더 많은 영화 로딩
    async loadMore() {
      if (!this.loading) {
        this.page++;  // 페이지 증가
        await this.fetchMovies();
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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* 화면 크기에 따라 자동으로 조정 */
  gap: 20px;
  overflow-y: auto;  /* 스크롤 가능하도록 설정 */
  max-height: 80vh;  /* 화면 크기에 맞게 최대 높이 설정 */
}

.loading {
  text-align: center;
  font-size: 18px;
  color: #666;
}

/* 페이지네이션 버튼을 화면 하단 중앙에 고정 */
.pagination {
  position: fixed;
  bottom: 20px;  /* 화면 하단에서 20px 떨어진 위치 */
  left: 50%;
  transform: translateX(-50%);  /* 가운데 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  z-index: 100;  /* 다른 요소들 위에 표시되도록 */
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
