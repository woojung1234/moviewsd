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

      <!-- 필터 초기화 버튼 추가 -->
      <button @click="resetFilters">필터 초기화</button>
    </div>
    <!-- 최근 검색어 -->
    <div class="recent-searches" v-if="recentSearches.length">
      <h4>최근 검색어</h4>
      <ul>
        <li v-for="search in recentSearches" :key="search" @click="applyRecentSearch(search)">
          {{ search }}
        </li>
      </ul>
    </div>

    <!-- 영화 목록 -->
    <div class="movie-list" ref="scrollContainer" @scroll="handleScroll">
      <div v-for="movie in filteredMovies" :key="movie.id" class="movie-card">
        <div class="poster-wrapper">
          <img
              :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
              :alt="movie.title"
              @click="toggleWishlist(movie)"
          />
          <!-- 찜된 영화에 별 표시 -->
          <span v-if="isInWishlist(movie)" class="wishlist-star">★</span>
        </div>
        <h3>{{ movie.title }}</h3>
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
      recentSearches: [],
      page: 1,
      loading: false,
      isEndOfData: false, // 더 이상 불러올 데이터가 없는지 확인
      apiKey: localStorage.getItem('apiKey'), // 로컬스토리지에서 API Key 가져오기
    };
  },
  created() {
    if (!this.apiKey) {
      alert('로그인 세션이 만료되었습니다. 다시 로그인해주세요.');
      this.$router.push('/signin');
      return;
    }
    this.debouncedSearch = debounce(this.searchMovies, 500);
    this.fetchGenres();
    this.loadInitialMovies(); // 초기 영화 데이터 로드
    this.loadRecentSearches(); // 최근 검색어 로드
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
    loadRecentSearches() {
      const searches = JSON.parse(localStorage.getItem('recentSearches')) || [];
      this.recentSearches = searches;
    },
    // 검색어 저장
    saveSearchQuery(query) {
      if (!query.trim()) return;

      // 중복 검색어 제거 및 추가
      const updatedSearches = [query, ...this.recentSearches.filter((q) => q !== query)];

      // 최대 검색어 개수 제한 (예: 10개)
      this.recentSearches = updatedSearches.slice(0, 10);

      // 로컬 스토리지에 저장
      localStorage.setItem('recentSearches', JSON.stringify(this.recentSearches));
    },
    async fetchGenres() {
      try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=ko-KR`
        );
        this.genres = response.data.genres;
      } catch (error) {
        console.error('장르 목록 가져오기 실패:', error);
        alert('장르 데이터를 불러오지 못했습니다.');
      }
    },
    async loadInitialMovies() {
      try {
        this.loading = true;
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=ko-KR&page=${this.page}`
        );
        this.allMovies = [...this.allMovies, ...response.data.results];
        this.movies = [...this.allMovies];
        if (response.data.results.length === 0) {
          this.isEndOfData = true;
        }
      } catch (error) {
        console.error('초기 영화 데이터 로드 실패:', error);
        alert('영화 데이터를 불러오지 못했습니다.');
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
    resetFilters() {
      // 필터 초기화 함수
      this.query = '';
      this.selectedGenre = '';
      this.minRating = '';
      this.releaseDate = '';
      this.applyFilters(); // 필터링 재적용
    },
    async searchMovies() {
      if (this.query.trim()) {
        this.saveSearchQuery(this.query);
        try {
          const response = await axios.get(
              `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.query}&language=ko-KR`
          );
          this.movies = response.data.results;
        } catch (error) {
          console.error('영화 검색 오류:', error);
          alert('검색 결과를 가져오지 못했습니다.');
        }
      } else {
        // 검색어가 비어 있으면 초기 데이터로 복원
        this.movies = this.allMovies;
      }
    },
    applyRecentSearch(query) {
      this.query = query;
      this.searchMovies();
    },
    // 찜 기능 토글
    toggleWishlist(movie) {
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      const movieIndex = wishlist.findIndex(item => item.id === movie.id);

      if (movieIndex === -1) {
        wishlist.push(movie);
      } else {
        wishlist.splice(movieIndex, 1);
      }

      localStorage.setItem("wishlist", JSON.stringify(wishlist));

      // 찜 상태 즉시 반영
      this.movies = this.movies.map(m => {
        if (m.id === movie.id) {
          m.isInWishlist = !m.isInWishlist;
        }
        return m;
      });
    },
    // 해당 영화가 위시리스트에 있는지 확인
    isInWishlist(movie) {
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      return wishlist.some(item => item.id === movie.id);
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
  position: relative;
}

.movie-card img {
  max-width: 100%;
  border-radius: 5px;
  cursor: pointer;
}

.wishlist-star {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 2rem;
  color: gold;
}

.loading {
  text-align: center;
  font-size: 18px;
  color: #555;
}

button {
  padding: 5px 10px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #3a9c6c;
}

button:focus {
  outline: none;
}
.recent-searches {
  margin-bottom: 20px;
  text-align: center;
}

.recent-searches h4 {
  margin-bottom: 10px;
  font-size: 18px;
}

.recent-searches ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
  justify-content: center;
}

.recent-searches li {
  cursor: pointer;
  padding: 5px 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  transition: background-color 0.2s ease;
}

.recent-searches li:hover {
  background-color: #dcdcdc;
}
</style>


