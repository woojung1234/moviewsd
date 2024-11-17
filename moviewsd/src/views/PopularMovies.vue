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
      <div v-for="genre in genres" :key="genre.name" class="genre-section">
        <h2>{{ genre.name }}</h2>
        <div class="movie-slider">
          <div
              v-for="movie in genre.movies"
              :key="movie.id"
              class="movie-card"
          >
            <router-link :to="{ name: 'movie-details', params: { id: movie.id } }">
              <img
                  :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path"
                  :alt="movie.title"
              />
              <h3>{{ movie.title }}</h3>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      featuredMovie: null, // 대표 영화 데이터
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
      // 대표 영화 가져오기 (인기 영화에서 첫 번째 영화 선택)
      const popularResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=1`
      );
      this.featuredMovie = popularResponse.data.results[0];

      // 장르별 영화 목록 가져오기
      for (let genre of this.genres) {
        let url = genre.endpoint
            ? `https://api.themoviedb.org/3/movie/${genre.endpoint}?api_key=${apiKey}&language=ko-KR&page=1`
            : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre.genreId}&language=ko-KR&page=1`;
        const response = await axios.get(url);
        genre.movies = response.data.results.slice(0, 10); // 각 장르별 10개 영화 표시
      }
    } catch (error) {
      console.error("영화 데이터를 불러오는 데 실패했습니다.", error);
    }
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

.featured-info h1 {
  font-size: 24px;
  margin: 0 0 10px;
}

.featured-info p {
  font-size: 14px;
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
  overflow-x: auto;
  gap: 10px;
  padding: 0 10px;
}

.movie-card {
  flex: 0 0 auto;
  width: 150px;
  text-align: center;
}

.movie-card img {
  width: 100%;
  border-radius: 8px;
}

.movie-card h3 {
  font-size: 14px;
  margin: 5px 0;
}

@media (max-width: 768px) {
  .featured-info h1 {
    font-size: 18px;
  }

  .featured-info p {
    font-size: 12px;
  }

  .movie-card {
    width: 120px;
  }
}
</style>

