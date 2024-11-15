import { createRouter, createWebHistory } from 'vue-router';
import PopularMovies from '../views/PopularMovies.vue';
import MovieDetailsPage from '../views/MovieDetailsPage.vue'; // 추가

const routes = [
  {
    path: '/',
    name: 'home',
    component: PopularMovies,
  },
  {
    path: '/movie/:id', // 영화 상세 페이지 경로
    name: 'movie-details',
    component: MovieDetailsPage, // 추가된 컴포넌트
    props: true, // URL 매개변수를 컴포넌트로 전달
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

