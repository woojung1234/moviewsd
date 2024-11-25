<template>
  <div class="featured-movie" v-if="movie">
    <img
        :src="'https://image.tmdb.org/t/p/original' + movie.backdrop_path"
        :alt="movie.title"
        class="featured-image"
    />
    <div class="featured-info">
      <h1>{{ movie.title }}</h1>
      <p>{{ movie.overview }}</p>
      <div class="button-group">
        <button class="play-button" @click="playMovie">▶ 재생</button>
        <button class="details-button" @click="goToDetails(movie.id)">상세정보</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useToast } from "vue-toastification";

const movie = ref(null);
const apiKey = localStorage.getItem("apiKey");
const toast = useToast();

const fetchFeaturedMovie = async () => {
  try {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=1`
    );
    movie.value = response.data.results[0];
  } catch (error) {
    toast.error("대표 영화를 불러오는 데 실패했습니다.");
  }
};

const playMovie = () => {
  toast.info("결제가 필요합니다.");
};

const goToDetails = (movieId) => {
  this.$router.push({ name: "movie-details", params: { id: movieId } });
};

onMounted(fetchFeaturedMovie);
</script>

<style scoped>
.featured-movie {
  position: relative;
  margin-bottom: 40px;
}

.featured-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 10px;
}

.featured-info {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
}

.button-group {
  margin-top: 20px;
}

button {
  background-color: #ff6347;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

button:hover {
  transform: scale(1.1);
  background-color: #ff4500;
}

.play-button {
  margin-right: 10px;
}

.details-button {
  background-color: #1e90ff;
}

.details-button:hover {
  background-color: #4682b4;
}
</style>
