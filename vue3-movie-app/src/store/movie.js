import axios from 'axios';

export default {
  namespaced: true,
  state: () => {
    return {
      movies: [],
      message: '',
      loading: false,
    }
  },
  getters: {},
  // 변이(데이터 변경)
  mutations: {
    // 상태를 한번에 업데이트
    updateState(state, payload) {
      // 새로운 배열데이터를 만들어줌
      // [ 'movies', 'message', 'loading' ]
      Object.keys(payload).forEach(key => {
        state[key] = payload[key] // == state.movies = payload.movies
      })
    },
    resetMovies(state) {
      state.movies = []
    }
  },
  // 비동기
  actions: {
    async searchMovies({ commit }, payload) {
      // Search movies...
      // https://www.omdbapi.com/ 사이트 영화api 사용
      const { title, type, number, year } = payload
      const OMDB_API_KEY = '69213124'

      const res = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`); // https로 수정
      const { Search, totalResults } = res.data

      commit('updateState', {
        movies: Search,
      })
    }
  },
}