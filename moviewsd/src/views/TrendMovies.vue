<template>
  <div class="trend-movies">
    <!-- View 형식 선택 버튼 -->
    <div class="view-toggle">
      <button @click="toggleView('table')">Table View</button>
      <button @click="toggleView('infinite')">Infinite Scroll</button>
    </div>

    <!-- Table View -->
    <div v-if="viewMode === 'table'" class="movie-table">
      <table>
        <thead>
        <tr>
          <th>Poster</th>
          <th>Title</th>
          <th>Overview</th>
          <th>Release Date</th>
          <th>Rating</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="movie in movies" :key="movie.id">
          <td><img :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path" :alt="movie.title" /></td>
          <td>{{ movie.title }}</td>
          <td>{{ movie.overview }}</td>
          <td>{{ movie.release_date }}</td>
          <td>{{ movie.vote_average }}</td>
        </tr>
        </tbody>
      </table>
      <!-- Pagination -->
      <div class="pagination">
        <button @click="changePage('previous')" :disabled="page <= 1">Previous</button>
        <span>Page {{ page }}</span>
        <button @click="changePage('next')">Next</button>
      </div>
    </div>

    <!-- Infinite Scroll View -->
    <div v-if="viewMode === 'infinite'" class="movie-list" ref="infiniteScroll" @scroll="handleScroll">
      <div v-for="movie in movies" :key="movie.id" class="movie-card">
        <img :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path" :alt="movie.title" />
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.overview }}</p>
      </div>

      <!-- Loading indicator -->
      <div v-if="loading" class="loading">Loading...</div>
    </div>

    <!-- Scroll to Top Button -->
    <button v-if="showScrollTop" @click="scrollToTop" class="scroll-top">Top</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      movies: [],
      page: 1,
      viewMode: 'table', // 선택된 view 모드 (table or infinite)
      loading: false,
      showScrollTop: false,
    };
  },
  mounted() {
    this.fetchMovies();
    window.addEventListener('scroll', this.handleScrollTopVisibility);
  },
  methods: {
    async fetchMovies() {
      this.loading = true;
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.VUE_APP_TMDB_API_KEY}&page=${this.page}&language=ko-KR`);
        this.movies = response.data.results;
      } catch (error) {
        console.error('영화 데이터를 가져오는 데 오류가 발생했습니다.', error);
      } finally {
        this.loading = false;
      }
    },
    toggleView(view) {
      this.viewMode = view;
      if (view === 'table') {
        this.page = 1;
        this.fetchMovies();
      }
    },
    changePage(direction) {
      if (direction === 'previous' && this.page > 1) {
        this.page--;
      } else if (direction === 'next') {
        this.page++;
      }
      this.fetchMovies();
    },
    async handleScroll() {
      const bottom = this.$refs.infiniteScroll.scrollHeight === this.$refs.infiniteScroll.scrollTop + this.$refs.infiniteScroll.clientHeight;
      if (bottom && !this.loading) {
        this.loading = true;
        this.page++;
        await this.fetchMovies();
      }
    },
    handleScrollTopVisibility() {
      if (window.scrollY > 300) {
        this.showScrollTop = true;
      } else {
        this.showScrollTop = false;
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
/* 공통 스타일 */
.movie-card {
  width: 200px;
  margin: 10px;
  text-align: center;
}

.movie-card img {
  width: 100%;
  border-radius: 10px;
}

.movie-table {
  width: 100%;
  border-collapse: collapse;
}

.movie-table th, .movie-table td {
  padding: 10px;
  border: 1px solid #ddd;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  padding: 5px 15px;
  margin: 0 10px;
  cursor: pointer;
}

.pagination button:disabled {
  cursor: not-allowed;
}

.loading {
  text-align: center;
  font-size: 18px;
}

.scroll-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
