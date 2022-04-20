export default {
  // module!
  namespaced: true,
  // data!
  state: () => {
    return {
      movies: [],
    }
  },
  // computed!
  getters: {
    movieIds(state) {
      return state.movies.map(movie => movie.imdbID)
    }
  },
  // methods!
  // 변이(데이터 변경)
  mutations: {
    resetMovies(state) {
      state.movies = []
    }
  },
  // 비동기
  actions: {
    searchMovies({ state, getters, commit }) {
      state;
      getters;
      commit;
    }
  },
}