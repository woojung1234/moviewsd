import axios from 'axios';
import MovieCard from "@/components/MovieCard.vue";

export default {
    components: { MovieCard },
    data() {
        return {
            viewType: 'table',  // 초기 화면은 Table View
            movies: [],          // 전체 영화 목록
            page: 1,             // 현재 페이지
            loading: false,      // 로딩 상태
            itemsPerPage: 20,    // 페이지당 영화 개수
            totalResults: 0,     // 전체 영화 수
            isScrolled: false,   // 스크롤 버튼 표시 여부
        };
    },
    mounted() {
        this.calculateItemsPerPage();
        window.addEventListener("resize", this.calculateItemsPerPage);

        if (this.$refs.scrollContainer) {
            this.$refs.scrollContainer.addEventListener("scroll", this.checkScroll);
        }
        this.fetchMovies();
    },
    beforeUnmount() {
        if (this.$refs.scrollContainer) {
            this.$refs.scrollContainer.removeEventListener("scroll", this.checkScroll);
        }
    },
    computed: {
        paginatedMovies() {
            const startIndex = (this.page - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.movies.slice(startIndex, endIndex);
        },
    },
    methods: {
        calculateItemsPerPage() {
            if (this.viewType === 'table') {
                const cardHeight = 200; // 영화 카드 높이
                const cardWidth = 120; // 영화 카드 너비
                const headerHeight = 100; // 헤더 높이
                const paginationHeight = 50; // 페이지네이션 높이
                const availableHeight = window.innerHeight - headerHeight - paginationHeight - 50; // 사용 가능한 높이
                const availableWidth = window.innerWidth - 20; // 좌우 여백

                const rows = Math.floor(availableHeight / cardHeight); // 표시할 행 수
                const cols = Math.floor(availableWidth / cardWidth); // 표시할 열 수

                this.itemsPerPage = rows * cols; // 한 페이지에 표시할 영화 개수
            }
        },
        async fetchMovies() {
            const apiKey = '1cc6831125c4a1baf8f809dc1f68ec14';
            try {
                this.loading = true;
                const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${this.page}`);
                if (this.page === 1) {
                    this.movies = response.data.results;
                } else {
                    this.movies.push(...response.data.results);
                }
                this.totalResults = response.data.total_results;
            } catch (error) {
                console.error('영화 데이터를 가져오는 데 오류가 발생했습니다.', error);
            } finally {
                this.loading = false;
            }
        },
        toggleWishlist(movie) {
            const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            const movieIndex = wishlist.findIndex(item => item.id === movie.id);

            if (movieIndex === -1) {
                wishlist.push(movie);
            } else {
                wishlist.splice(movieIndex, 1);
            }
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        },
        changeView(type) {
            this.viewType = type;
            this.page = 1;
            this.movies = [];
            this.fetchMovies();
        },
        changePage(direction) {
            if (direction === 'previous' && this.page > 1) {
                this.page--;
            } else if (direction === 'next' && this.page * this.itemsPerPage < this.totalResults) {
                this.page++;
            }
            this.fetchMovies();
        },
        loadMore() {
            if (!this.loading) {
                this.page++;
                this.fetchMovies();
            }
        },
        scrollToTop() {
            const container = this.$refs.scrollContainer;
            container.scrollTo({ top: 0, behavior: "smooth" }); // 부드럽게 최상단으로 이동
        },
        checkScroll() {
            const container = this.$refs.scrollContainer;
            this.isScrolled = container.scrollTop > 30; // 스크롤 위치가 300px 이상일 때 버튼 표시
        },
    },
};
