<template>
  <div class="home">
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
</template>

<script>
import axios from "axios";
import MovieCard from "@/components/MovieCard.vue"; // MovieCard 컴포넌트 임포트

export default {
  components: {
    MovieCard, // MovieCard 컴포넌트 등록
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
    };
  },
  async mounted() {
    const apiKey = process.env.VUE_APP_TMDB_API_KEY;

    try {
      const popularResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=1`
      );
      this.featuredMovie = popularResponse.data.results[0];

      for (let genre of this.genres) {
        let url = genre.endpoint
            ? `https://api.themoviedb.org/3/movie/${genre.endpoint}?api_key=${apiKey}&language=ko-KR&page=1`
            : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre.genreId}&language=ko-KR&page=1`;
        const response = await axios.get(url);
        genre.movies = response.data.results.slice(0, 10);
      }
    } catch (error) {
      console.error("영화 데이터를 불러오는 데 실패했습니다.", error);
    }
  },
  methods: {
    handleScroll(event, index) {
      const slider = this.$refs.genreSections[index].querySelector(".movie-slider");
      slider.scrollLeft += event.deltaY > 0 ? 100 : -100;
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
  border-radius: 4px; /* 스크롤바의 둥근 모서리 */
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
