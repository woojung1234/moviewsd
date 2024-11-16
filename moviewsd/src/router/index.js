import { createRouter, createWebHistory } from 'vue-router';
import PopularMovies from '../views/PopularMovies.vue';
import MovieDetailsPage from '../views/MovieDetailsPage.vue'; // 추가
import SearchMovies from '../views/SearchMovies.vue';  // 추가된 컴포넌트
import GenreMovies from '../views/GenreMovies.vue';  // 추가된 컴포넌트
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
    path: '/search', // 영화 검색 페이지 경로
    name: 'search',
    component: SearchMovies, // 검색 페이지
  },
  {
    path: '/genre/:id', // 장르별 영화 필터링 페이지 경로
    name: 'genre',
    component: GenreMovies, // 장르별 영화 컴포넌트
    props: true, // URL 매개변수를 컴포넌트로 전달
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

