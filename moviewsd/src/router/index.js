import { createRouter, createWebHistory } from 'vue-router';
import PopularMovies from '../views/PopularMovies.vue';
import MovieDetailsPage from '../views/MovieDetailsPage.vue'; // 추가
import SearchMovies from '../views/SearchMovies.vue';  // 추가된 컴포넌트
import GenreMovies from '../views/GenreMovies.vue';  // 추가된 컴포넌트
import TrendMovies from '../views/TrendMovies.vue';
import WishList from '../views/WishList.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: PopularMovies,
  },
  {
    path: '/popular',
    name: 'popular',
    component: TrendMovies, // 대세 콘텐츠 페이지 경로 설정
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
    path: '/wishlist',  // 위시리스트 페이지 경로
    name: 'wishlist',
    component: WishList
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

