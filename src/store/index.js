import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    popularMovies: [], // 인기 영화 목록
    movieDetails: null, // 선택된 영화의 상세 정보
  },
  getters: {
    popularMovies: (state) => state.popularMovies, // 인기 영화 목록 Getter
    movieDetails: (state) => state.movieDetails, // 영화 상세 정보 Getter
  },
  mutations: {
    SET_POPULAR_MOVIES(state, movies) {
      state.popularMovies = movies; // 인기 영화 목록 상태 업데이트
    },
    SET_MOVIE_DETAILS(state, details) {
      state.movieDetails = details; // 영화 상세 정보 상태 업데이트
    },
  },
  actions: {
    async fetchPopularMovies({ commit }) {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: process.env.VUE_APP_TMDB_API_KEY,
            language: 'ko-KR',
            page: 1,
          },
        });
        commit('SET_POPULAR_MOVIES', response.data.results); // API 응답 데이터를 커밋
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    },
    async fetchMovieDetails({ commit }, movieId) {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          params: {
            api_key: process.env.VUE_APP_TMDB_API_KEY,
            language: 'ko-KR',
          },
        });
        commit('SET_MOVIE_DETAILS', response.data); // 영화 상세 정보 데이터 커밋
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    },
  },
  modules: {},
});

