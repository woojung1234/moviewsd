<template>
  <div class="genre-movies">
    <h1>장르별 영화</h1>
    <div v-for="genre in genres" :key="genre.id" class="genre-section">
      <h2>{{ genre.name }}</h2>
      <div class="movie-slider">
        <div v-for="movie in genre.movies" :key="movie.id" class="movie-card">
          <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
          <h3>{{ movie.title }}</h3>
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
      genres: [
        { id: 35, name: "코믹", movies: [] },
        { id: 28, name: "액션", movies: [] },
        { id: 10749, name: "로맨스", movies: [] },
      ],
    };
  },
  async created() {
    // 각 장르별로 영화 데이터를 불러옵니다.
    for (const genre of this.genres) {
      try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_TMDB_API_KEY}&with_genres=${genre.id}&language=ko-KR`
        );
        genre.movies = response.data.results;
      } catch (error) {
        console.error(`${genre.name} 장르 영화 로드 오류:`, error);
        genre.movies = [];
      }
    }
  },
};
</script>

<style scoped>
.genre-movies {
  padding: 20px;
  text-align: left;
}

h1 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.genre-section {
  margin-bottom: 30px;
}

.genre-section h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.movie-slider {
  display: flex;
  overflow-x: auto;
  padding-bottom: 10px;
  gap: 10px;
  scroll-snap-type: x mandatory;
}

.movie-card {
  flex: 0 0 auto;
  width: 150px;
  text-align: center;
  scroll-snap-align: start;
}

.movie-card img {
  width: 100%;
  border-radius: 10px;
}

.movie-card h3 {
  font-size: 14px;
  margin-top: 8px;
  color: #333;
}

.genre-section::-webkit-scrollbar {
  height: 8px;
}

.genre-section::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.genre-section::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
