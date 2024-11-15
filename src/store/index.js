import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    popularMovies: []
  },
  getters: {
    popularMovies: (state) => state.popularMovies
  },
  mutations: {
    SET_POPULAR_MOVIES(state, movies) {
      state.popularMovies = movies; // 상태에 새로운 인기 영화 데이터를 저장
    }
  },
  actions: {
    async fetchPopularMovies({ commit }) {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: process.env.VUE_APP_TMDB_API_KEY,
            language: 'ko-KR',
            page: 1
          }
        });
        commit('SET_POPULAR_MOVIES', response.data.results);  // API 응답 데이터를 커밋
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    }
  },
  modules: {
  }
})
