<template>
  <div class="genre-section" v-if="movies.length > 0">
    <h2>{{ genre.name }}</h2>
    <div
        class="movie-slider"
        @wheel.prevent="handleScroll"
        ref="slider"
    >
      <MovieCard
          v-for="movie in movies"
          :key="movie.id"
          :movie="movie"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import MovieCard from "@/components/MovieCard.vue";
import { useToast } from "vue-toastification";

const props = defineProps({
  genre: {
    type: Object,
    required: true,
  },
});

const movies = ref([]);
const slider = ref(null);
const apiKey = localStorage.getItem("apiKey");
const toast = useToast();

const fetchMoviesByGenre = async () => {
  try {
    const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie`,
        {
          params: {
            api_key: apiKey,
            language: "ko-KR",
            with_genres: props.genre.id,
            page: 1,
          },
        }
    );
    movies.value = response.data.results.slice(0, 20);
  } catch (error) {
    toast.error(`${props.genre.name} 영화를 불러오는 데 실패했습니다.`);
  }
};

const handleScroll = (event) => {
  slider.value.scrollLeft += event.deltaY > 0 ? 100 : -100;
};

onMounted(fetchMoviesByGenre);

watch(() => props.genre, fetchMoviesByGenre);
</script>

<style scoped>
.genre-section {
  margin-bottom: 30px;
}

.genre-section h2 {
  font-size: 20px;
  margin-bottom: 10px;
  text-align: left;
  padding-left: 10px;
}

.movie-slider {
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding: 0 10px;
  scrollbar-width: none;
}

.movie-slider::-webkit-scrollbar {
  display: none;
}
</style>
