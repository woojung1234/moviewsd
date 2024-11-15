import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    popularMovies: [], // 인기 영화 목록
    movieDetails: null, // 선택된 영화의 상세 정보
    searchedMovies: [],
    genreMovies: [],
    genres: [],
  },
  getters: {
    popularMovies: (state) => state.popularMovies, // 인기 영화 목록 Getter
    movieDetails: (state) => state.movieDetails, // 영화 상세 정보 Getter
    searchedMovies: (state) => state.searchedMovies,
    genreMovies: (state) => state.genreMovies, // 장르별 영화 목록 Getter
    genres: (state) => state.genres, // 영화 장르 목록 Getter
  },
  mutations: {
    SET_POPULAR_MOVIES(state, movies) {
      state.popularMovies = movies; // 인기 영화 목록 상태 업데이트
    },
    SET_MOVIE_DETAILS(state, details) {
      state.movieDetails = details; // 영화 상세 정보 상태 업데이트
    },
    SET_SEARCHED_MOVIES(state, movies) {
      state.searchedMovies = movies; // 검색된 영화 목록 상태 업데이트
    },
    SET_GENRE_MOVIES(state, movies) {
      state.genreMovies = movies; // 장르별 영화 목록 상태 업데이트
    },
    SET_GENRES(state, genres) {
      state.genres = genres; // 영화 장르 목록 상태 업데이트
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
    async fetchSearchedMovies({ commit }, query) {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: process.env.VUE_APP_TMDB_API_KEY,
            language: 'ko-KR',
            query: query, // 검색어
            page: 1,
          },
        });
        commit('SET_SEARCHED_MOVIES', response.data.results); // 검색된 영화 목록 커밋
      } catch (error) {
        console.error('Error fetching searched movies:', error);
      }
    },
    async fetchGenreMovies({ commit }, genreId) {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
          params: {
            api_key: process.env.VUE_APP_TMDB_API_KEY,
            language: 'ko-KR',
            with_genres: genreId, // 선택된 장르로 필터링
            page: 1,
          },
        });
        commit('SET_GENRE_MOVIES', response.data.results); // 장르별 영화 목록 커밋
      } catch (error) {
        console.error('Error fetching genre movies:', error);
      }
    },
    // 영화 장르 목록 가져오기
    async fetchGenres({ commit }) {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
          params: {
            api_key: process.env.VUE_APP_TMDB_API_KEY,
            language: 'ko-KR',
          },
        });
        commit('SET_GENRES', response.data.genres); // 영화 장르 목록 커밋
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    },
  },
  modules: {},
});

