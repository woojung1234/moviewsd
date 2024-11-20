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
    meta: { requiresAuth: true }, // 보호된 경로
  },
  {
    path: '/popular',
    name: 'popular',
    component: TrendMovies,
    meta: { requiresAuth: true }, // 보호된 경로
  },
  {
    path: '/movie/:id',
    name: 'movie-details',
    component: MovieDetailsPage,
    props: true,
    meta: { requiresAuth: true }, // 보호된 경로
  },
  {
    path: '/search',
    name: 'search',
    component: SearchMovies,
    meta: { requiresAuth: true }, // 보호된 경로
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: WishList,
    meta: { requiresAuth: true }, // 보호된 경로
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
    next({ name: 'signin' });
  } else if (to.name === 'signin' && isAuthenticated) {
    // 이미 로그인한 사용자가 /signin 페이지에 접근하려는 경우
    next({ name: 'home' });
  } else {
    next(); // 그 외는 허용
  }
});

export default router;
