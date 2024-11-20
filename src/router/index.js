import { createRouter, createWebHistory } from 'vue-router';
import PopularMovies from '../views/PopularMovies.vue';
import MovieDetailsPage from '../views/MovieDetailsPage.vue';
import SearchMovies from '../views/SearchMovies.vue';
import TrendMovies from '../views/TrendMovies.vue';
import WishList from '../views/WishList.vue';
import SigninPage from '../views/SigninPage.vue';

const routes = [
  {
    path: '/signin',
    name: 'signin',
    component: SigninPage,
  },
  {
    path: '/',
    name: 'home',
    component: PopularMovies,
    meta: { requiresAuth: true },
  },
  {
    path: '/popular',
    name: 'popular',
    component: TrendMovies,
    meta: { requiresAuth: true },
  },
  {
    path: '/movie/:id',
    name: 'movie-details',
    component: MovieDetailsPage,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: '/search',
    name: 'search',
    component: SearchMovies,
    meta: { requiresAuth: true },
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: WishList,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 라우터 가드
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true'; // 로그인 상태 확인

  if (to.meta.requiresAuth && !isAuthenticated) {
    // 인증되지 않은 사용자가 보호된 경로로 접근하려는 경우
    alert('로그인이 필요합니다.');
    next({ name: 'signin' }); // 로그인 페이지로 리다이렉트
  } else if (to.name === 'signin' && isAuthenticated) {
    // 이미 로그인한 사용자가 로그인 페이지로 접근하려는 경우
    alert('이미 로그인 상태입니다.');
    next({ name: 'home' }); // 홈 페이지로 리다이렉트
  } else {
    next(); // 그 외 모든 경우 허용
  }
});

export default router;
