<template>
  <TrendMoviesTemplate />
</template>

<script>
import TrendMoviesTemplate from "@/components/TrendMovie/TrendCard.vue";
import createTrendMoviesHandlers from "@/components/TrendMovie/TrendCard.js";

export default {
  components: {
    TrendMoviesTemplate,
  },
  setup() {
    return createTrendMoviesHandlers();
  },
};
</script>

<style src="@/components/TrendMovie/TrendCard.css" scoped></style>

