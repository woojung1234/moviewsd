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
  history: createWebHistory('/'), // 기본 URL
  routes,
});

// 라우터 가드
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true' && localStorage.getItem('apiKey');
  console.log('Navigating to:', to.name);
  console.log('Is Authenticated:', isAuthenticated);

  if (to.name === 'signin' && isAuthenticated) {
    console.log('Already logged in. Redirecting to home.');
    next({ name: 'home' });
  } else if (to.meta.requiresAuth && !isAuthenticated) {
    console.log('Access denied. Redirecting to signin.');
    next({ name: 'signin' });
  } else {
    console.log('Access granted:', to.name);
    next(); // 그대로 진행
  }
});

export default router;

