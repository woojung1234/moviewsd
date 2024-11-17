<template>
  <div class="movies">
    <h1>메인 페이지</h1>

    <!-- 인기 영화 -->
    <section>
      <h2>인기 영화</h2>
      <div class="movie-list">
        <div v-for="movie in popularMovies" :key="movie.id" class="movie-card">
          <router-link :to="{ name: 'movie-details', params: { id: movie.id } }">
            <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
            <h3>{{ movie.title }}</h3>
            <p>{{ movie.overview }}</p>
            <p>평점: {{ movie.vote_average }}</p>
            <p>개봉일: {{ movie.release_date }}</p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 상영 중 영화 -->
    <section>
      <h2>상영 중 영화</h2>
      <div class="movie-list">
        <div v-for="movie in nowPlayingMovies" :key="movie.id" class="movie-card">
          <router-link :to="{ name: 'movie-details', params: { id: movie.id } }">
            <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
            <h3>{{ movie.title }}</h3>
            <p>{{ movie.overview }}</p>
            <p>평점: {{ movie.vote_average }}</p>
            <p>개봉일: {{ movie.release_date }}</p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 다가오는 영화 -->
    <section>
      <h2>다가오는 영화</h2>
      <div class="movie-list">
        <div v-for="movie in upcomingMovies" :key="movie.id" class="movie-card">
          <router-link :to="{ name: 'movie-details', params: { id: movie.id } }">
            <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
            <h3>{{ movie.title }}</h3>
            <p>{{ movie.overview }}</p>
            <p>평점: {{ movie.vote_average }}</p>
            <p>개봉일: {{ movie.release_date }}</p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 높은 평점 영화 -->
    <section>
      <h2>높은 평점 영화</h2>
      <div class="movie-list">
        <div v-for="movie in topRatedMovies" :key="movie.id" class="movie-card">
          <router-link :to="{ name: 'movie-details', params: { id: movie.id } }">
            <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title" />
            <h3>{{ movie.title }}</h3>
            <p>{{ movie.overview }}</p>
            <p>평점: {{ movie.vote_average }}</p>
            <p>개봉일: {{ movie.release_date }}</p>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      popularMovies: [],
      nowPlayingMovies: [],
      upcomingMovies: [],
      topRatedMovies: [],
    };
  },
  async mounted() {
    const apiKey = process.env.VUE_APP_TMDB_API_KEY;

    try {
      const [popular, nowPlaying, upcoming, topRated] = await Promise.all([
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=1`),
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=ko-KR&page=1`),
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=ko-KR&page=1`),
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=ko-KR&page=1`),
      ]);

      this.popularMovies = popular.data.results;
      this.nowPlayingMovies = nowPlaying.data.results;
      this.upcomingMovies = upcoming.data.results;
      this.topRatedMovies = topRated.data.results;
    } catch (error) {
      console.error('영화 데이터를 가져오는 데 실패했습니다.', error);
    }
  },
};
</script>

<style scoped>
.movies {
  text-align: center;
}

section {
  margin-bottom: 40px;
}

.movie-list {
  display: flex;
  overflow-x: scroll;
  padding: 10px 0;
}

.movie-card {
  min-width: 200px;
  margin: 10px;
  text-align: center;
  flex-shrink: 0;
}

.movie-card img {
  width: 100%;
  border-radius: 10px;
}

.movie-card h3 {
  font-size: 16px;
  margin: 5px 0;
}

.movie-card p {
  font-size: 14px;
  color: #555;
}
</style>

