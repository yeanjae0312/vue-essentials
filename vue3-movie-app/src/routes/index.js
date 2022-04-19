import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'

export default createRouter({
  // Hash, History 두가지 모드를 사용 가능 (우리는 Hash 사용 - 페이지를 새로고침 할 때 페이지를 찾을 수 없다는 오류를 방지)
  // Hash => https://google.com/#/search => #이 url에 포함됨
  history: createWebHashHistory(),
  // pages
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/about',
      component: About
    }
  ]
})