import { createRouter, createWebHistory } from 'vue-router';
import PopularMovies from '../views/PopularMovies.vue';
import MovieDetailsPage from '../views/MovieDetailsPage.vue'; // 추가
import SearchMovies from '../views/SearchMovies.vue';
import TrendMovies from '../views/TrendMovies.vue';
import WishList from '../views/WishList.vue';
import SignInPage from '../views/SingInPage.vue'; // 오타 수정

const routes = [
  {
    path: '/signin',
    name: 'signin',
    component: SignInPage, // /signin 경로로 SignInPage.vue 연결
  },
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
    path: '/wishlist', // 위시리스트 페이지 경로
    name: 'wishlist',
    component: WishList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 라우터 가드 추가
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('email'); // 로컬스토리지에 email이 있으면 로그인 상태
  if (to.name !== 'signin' && !isAuthenticated) {
    // 로그인하지 않은 상태에서 로그인 페이지가 아닌 곳으로 가려하면
    next({ name: 'signin' }); // 로그인 페이지로 리다이렉트
  } else {
    next(); // 그렇지 않으면 원래 경로로 진행
  }
});

export default router;
