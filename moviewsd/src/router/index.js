import { createRouter, createWebHistory } from 'vue-router'
import MovieList from '../views/MovieList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MovieList
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/movies',  // 이 경로는 선택사항, 만약 '/movies'로 접근할 수 있도록 하려면 남겨두세요.
    name: 'movies',
    component: MovieList,  // MovieList 페이지 연결
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
