import axios from 'axios';
import _uniqBy from 'lodash/uniqBy';

export default {
  namespaced: true,
  state: () => {
    return {
      movies: [],
      message: 'Search for the movie title!',
      loading: false,
      theMovie: {},
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
    async searchMovies({ state, commit }, payload) {
      // loading이 true라면 함수가 실행되지 않도록 한다. (함수가 실행되고 있는데 엔터를 누르거나 apply버튼을 눌러 생기는 문제를 방지)
      if (state.loading) return

      commit('updateState', {
        message: '',
        loading: true,
      })

      try {
        // Search movies...
        // https://www.omdbapi.com/ 사이트 영화api 사용

        const res = await _fetchMovie({
          ...payload,
          page: 1
        })
        const { Search, totalResults } = res.data

        commit('updateState', {
          movies: _uniqBy(Search, 'imdbID'), // _uniqBy : 중복되는 id 제거해주는 api
        })
        
        console.log(totalResults) // 305 => 31번 요청해야 함
        console.log(typeof totalResults) // string

        const total = parseInt(totalResults, 10) // 10진법의 정수로 변환
        const pageLength = Math.ceil(total / 10)

        //  추가 요청
        if (pageLength > 1) {
          for (let page=2; page<=pageLength; page++) {
            if (page > (payload.number / 10)) break // number를 10보다 나눈 값보다 크면 for문을 멈춘다

            // page 숫자가 달라짐
            const res = await _fetchMovie({
              ...payload,
              page
            })
            const { Search } = res.data
            commit('updateState', {
              movies: [...state.movies, ..._uniqBy(Search, 'imdbID')] // 기존의 movies 뒤에 Search를 붙이겠다.
            })
          }
        }
      } catch (message) {
        commit('updateSTate', {
          movies: [],
          message
        })
      } finally {
        commit('updateState', {
          loading: false,
        })
      }
    },
    async searchMovieWidthID({state, commit}, payload) {
      if (state.loading) return
      
      commit('updateState', {
        theMovie: {},
        loading: true
      })

      try {
        const res = await _fetchMovie(payload)
        
        commit('updateState', {
          theMovie: res.data
        })

      } catch (error) {
        commit('updateState', {
          theMovie: {}
        })
      } finally {
        commit('updateState', {
          loading: false
        })
      }
    }
  },
}

// 현재 파일 내부에서만 사용
function _fetchMovie(payload) {
  const { title, type, year, page, id } = payload
  const OMDB_API_KEY = '69213124'
  const url = id ? `https://www.omdbapi.com/?i=${id}&apikey=${OMDB_API_KEY}` : `https://www.omdbapi.com/?i=tt3896198&apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}` // https로 수정
  // const url = `https://www.omdbapi.com/?i=tt3896198&apikey=${OMDB_API_KEY}` // 에러를 발생시키기 위해 작성한 코드

  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(res => {
        if (res.data.Error) {
          reject(res.data.Error)
        }
        resolve(res)
      })
      .catch(err => {
        reject(err.message)
      })
  })
}