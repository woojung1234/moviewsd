import axios from "axios";
import { ref, computed } from "vue";

export default function createTrendMoviesHandlers() {
    const viewType = ref("table");
    const movies = ref([]);
    const page = ref(1);
    const loading = ref(false);
    const itemsPerPage = ref(20);
    const totalResults = ref(0);
    const isScrolled = ref(false);

    const calculateItemsPerPage = () => {
        const cardHeight = 320;
        const cardWidth = 220;
        const headerHeight = 100;
        const paginationHeight = 50;
        const availableHeight = window.innerHeight - headerHeight - paginationHeight - 50;
        const availableWidth = window.innerWidth - 50;

        const rows = Math.floor(availableHeight / cardHeight);
        const cols = Math.floor(availableWidth / cardWidth);

        itemsPerPage.value = rows * cols;
    };

    const paginatedMovies = computed(() => {
        const startIndex = (page.value - 1) * itemsPerPage.value;
        const endIndex = startIndex + itemsPerPage.value;
        return movies.value.slice(startIndex, endIndex);
    });

    const fetchMovies = async () => {
        const apiKey = "1cc6831125c4a1baf8f809dc1f68ec14";
        try {
            loading.value = true;
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${page.value}`
            );
            if (page.value === 1) {
                movies.value = response.data.results;
            } else {
                movies.value.push(...response.data.results);
            }
            totalResults.value = response.data.total_results;
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            loading.value = false;
        }
    };

    const changeView = (type) => {
        viewType.value = type;
        page.value = 1;
        movies.value = [];
        fetchMovies();
    };

    const changePage = (direction) => {
        if (direction === "previous" && page.value > 1) {
            page.value--;
        } else if (direction === "next" && page.value * itemsPerPage.value < totalResults.value) {
            page.value++;
        }
        fetchMovies();
    };

    const loadMore = async () => {
        if (!loading.value) {
            page.value++;
            await fetchMovies();
        }
    };

    const scrollToTop = () => {
        const container = document.querySelector(".infinite-scroll");
        if (container) {
            container.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    window.addEventListener("resize", calculateItemsPerPage);
    calculateItemsPerPage();
    fetchMovies();

    return {
        viewType,
        movies,
        page,
        loading,
        itemsPerPage,
        totalResults,
        isScrolled,
        calculateItemsPerPage,
        paginatedMovies,
        fetchMovies,
        changeView,
        changePage,
        loadMore,
        scrollToTop,
    };
}

