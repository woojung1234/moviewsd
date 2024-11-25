<template>
  <div class="home">
    <!-- 로딩 중 표시 -->
    <div v-if="loading" class="loading">
      데이터를 불러오는 중입니다...
    </div>

    <!-- 로딩이 끝난 후 콘텐츠 표시 -->
    <div v-else>
      <!-- 대표 영화 섹션 -->
      <div v-if="featuredMovie" class="featured-movie">
        <img
            :src="'https://image.tmdb.org/t/p/original' + featuredMovie.backdrop_path"
            :alt="featuredMovie.title"
            class="featured-image"
        />
        <div class="featured-info">
          <h1>{{ featuredMovie.title }}</h1>
          <p>{{ featuredMovie.overview }}</p>
          <div class="button-group">
            <!-- 재생 버튼 -->
            <button class="play-button" @click="playMovie">▶ 재생</button>
            <!-- 상세정보 버튼 -->
            <button
                class="details-button"
                @click="goToDetails(featuredMovie.id)"
            >
              상세정보
            </button>
          </div>
        </div>
      </div>

      <!-- 장르별 영화 섹션 -->
      <div class="genre-sections">
        <div
            v-for="(genre, index) in genres"
            :key="genre.name"
            class="genre-section"
            ref="genreSections"
        >
          <h2>{{ genre.name }}</h2>
          <div
              class="movie-slider"
              @wheel.prevent="handleScroll($event, index)"
          >
            <MovieCard
                v-for="movie in genre.movies"
                :key="movie.id"
                :movie="movie"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MovieCard from "@/components/MovieCard.vue";

export default {
  components: {
    MovieCard,
  },
  data() {
    return {
      featuredMovie: null,
      genres: [
        { name: "최신", endpoint: "now_playing", movies: [] },
        { name: "인기", endpoint: "popular", movies: [] },
        { name: "코믹", genreId: 35, movies: [] },
        { name: "액션", genreId: 28, movies: [] },
        { name: "로맨스", genreId: 10749, movies: [] },
      ],
      apiKey: null,
      loading: true, // 초기 로딩 상태
    };
  },
  async mounted() {
    this.apiKey = localStorage.getItem('apiKey');

    if (!this.apiKey) {
      alert('API Key가 없습니다. 로그인을 먼저 진행해주세요.');
      this.$router.push('/signin');
      return;
    }

    try {
      // 대표 영화 데이터 로드
      const popularResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=ko-KR&page=1`
      );
      this.featuredMovie = popularResponse.data.results[0];

      // 장르별 영화 데이터 로드
      for (let genre of this.genres) {
        const url = genre.endpoint
            ? `https://api.themoviedb.org/3/movie/${genre.endpoint}?api_key=${this.apiKey}&language=ko-KR&page=1`
            : `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=${genre.genreId}&language=ko-KR&page=1`;

        const response = await axios.get(url);
        genre.movies = response.data.results.slice(0, 10);
      }
    } catch (error) {
      console.error("영화 데이터를 불러오는 데 실패했습니다:", error.message);
      alert('영화 데이터를 불러오는 데 실패했습니다. 다시 시도해주세요.');
      this.$router.push('/signin');
    } finally {
      this.loading = false; // 로딩 상태 종료
    }
  },
  methods: {
    handleScroll(event, index) {
      const slider = this.$refs.genreSections[index].querySelector(".movie-slider");
      slider.scrollLeft += event.deltaY > 0 ? 100 : -100;
    },
    playMovie() {
    },
    goToDetails(movieId) {
      this.$router.push({ name: "movie-details", params: { id: movieId } });
    },
  },
};
</script>



<style scoped>
.home {
  text-align: center;
}

.featured-movie {
  position: relative;
  margin-bottom: 40px;
}

.featured-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 10px;
}

.featured-info {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
}

.genre-sections {
  margin-top: 20px;
}

.genre-section {
  margin-bottom: 30px;
}

.genre-section h2 {
  font-size: 20px;
  margin-bottom: 10px;
  text-align: left;
  padding-left: 10px;
}

.movie-slider {
  display: flex;
  overflow-x: auto; /* 'scroll' 대신 'auto'로 설정하여 필요할 때만 스크롤이 표시됨 */
  gap: 10px;
  padding: 0 10px;
  scrollbar-width: none; /* Firefox에서 스크롤바 스타일 설정 */
  -ms-overflow-style: none; /* IE/Edge에서 스크롤바 스타일 설정 */
}

.movie-slider::-webkit-scrollbar {
  display: none; /* 스크롤바 높이 설정 */
}

.movie-slider::-webkit-scrollbar-thumb {
  background: #888; /* 스크롤바의 색 */
  border-radius: 5px; /* 스크롤바의 둥근 모서리 */
}
.button-group {
  margin-top: 20px;
}

button {
  background-color: #ff6347;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

button:hover {
  transform: scale(1.1);
  background-color: #ff4500;
}

.play-button {
  margin-right: 10px;
}

.details-button {
  background-color: #1e90ff;
}

.details-button:hover {
  background-color: #4682b4;
}

.movie-card {
  flex: 0 0 auto; /* 카드들이 고정 크기로 배치되도록 설정 */
  width: 150px; /* 각 카드의 고정 너비 */
  text-align: center;
}

.movie-card img {
  width: 100%;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .featured-info h1 {
    font-size: 18px;
  }

  .featured-info p {
    font-size: 12px;
  }
}
</style>
