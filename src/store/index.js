import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    isLoggedIn: false, // 로그인 상태
    apiKey: null, // 로그인된 사용자의 API 키
    user: null,
    popularMovies: [], // 인기 영화 목록
    movieDetails: null, // 선택된 영화의 상세 정보
    searchedMovies: [],
    genreMovies: [],
    genres: [],
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
    user: (state) => state.user,// 로그인 상태 Getter
    apiKey: (state) => state.apiKey, // API 키 Getter
    popularMovies: (state) => state.popularMovies, // 인기 영화 목록 Getter
    movieDetails: (state) => state.movieDetails, // 영화 상세 정보 Getter
    searchedMovies: (state) => state.searchedMovies,
    genreMovies: (state) => state.genreMovies, // 장르별 영화 목록 Getter
    genres: (state) => state.genres, // 영화 장르 목록 Getter
  },
  mutations: {
    // 인증 관련
    SET_LOGIN_STATE(state, payload) {
      state.isLoggedIn = payload.isLoggedIn;
      state.apiKey = payload.apiKey;
      state.user = payload.user;
    },
    LOGOUT(state) {
      state.isLoggedIn = false;
      state.apiKey = null;
    },

    // 영화 데이터 관련
    SET_POPULAR_MOVIES(state, movies) {
      state.popularMovies = movies;
    },
    SET_MOVIE_DETAILS(state, details) {
      state.movieDetails = details;
    },
    SET_SEARCHED_MOVIES(state, movies) {
      state.searchedMovies = movies;
    },
    SET_GENRE_MOVIES(state, movies) {
      state.genreMovies = movies;
    },
    SET_GENRES(state, genres) {
      state.genres = genres;
    },
  },
  actions: {
    // 인증 관련
    login({ commit }, { apiKey, user }) {
      commit('SET_LOGIN_STATE', { isLoggedIn: true, apiKey, user });
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('apiKey', apiKey);
      localStorage.setItem('user', JSON.stringify(user));
    },
    logout({ commit }) {
      commit('LOGOUT');
      localStorage.setItem('isLoggedIn', 'false'); // 상태만 초기화
    },
    loadAuthState({ commit }) {
      // 브라우저 새로고침 시 상태 복원
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const apiKey = localStorage.getItem('apiKey');
      const user = JSON.parse(localStorage.getItem('user'));
      if (isLoggedIn && apiKey) {
        commit('SET_LOGIN_STATE', { isLoggedIn, apiKey, user });
      }
    },


    // 영화 데이터 가져오기
    async fetchPopularMovies({ commit, state }) {
      try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/movie/popular",
            {
              params: {
                api_key: state.apiKey,
                language: "ko-KR",
                page: 1,
              },
            }
        );
        commit("SET_POPULAR_MOVIES", response.data.results);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    },
    async fetchMovieDetails({ commit, state }, movieId) {
      try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}`,
            {
              params: {
                api_key: state.apiKey,
                language: "ko-KR",
              },
            }
        );
        commit("SET_MOVIE_DETAILS", response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    },
    async fetchSearchedMovies({ commit, state }, query) {
      try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/search/movie",
            {
              params: {
                api_key: state.apiKey,
                language: "ko-KR",
                query: query,
                page: 1,
              },
            }
        );
        commit("SET_SEARCHED_MOVIES", response.data.results);
      } catch (error) {
        console.error("Error fetching searched movies:", error);
      }
    },
    async fetchGenreMovies({ commit, state }, genreId) {
      try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/discover/movie",
            {
              params: {
                api_key: state.apiKey,
                language: "ko-KR",
                with_genres: genreId,
                page: 1,
              },
            }
        );
        commit("SET_GENRE_MOVIES", response.data.results);
      } catch (error) {
        console.error("Error fetching genre movies:", error);
      }
    },
    async fetchGenres({ commit, state }) {
      try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/genre/movie/list",
            {
              params: {
                api_key: state.apiKey,
                language: "ko-KR",
              },
            }
        );
        commit("SET_GENRES", response.data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    },
  },
  modules: {},
});


