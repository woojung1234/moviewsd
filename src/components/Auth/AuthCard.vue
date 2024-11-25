<template>
  <div class="auth-card">
    <slot></slot>
    <a href="javascript:void(0)" class="account-check" @click="toggleCard">
      <slot name="toggle-text"></slot>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    isLoginVisible: Boolean,
  },
  methods: {
    toggleCard() {
      this.$emit("toggle");
    },
  },
};
</script>

<style scoped>
.auth-card {
  border-radius: 10px;
  width: 100%;
  max-width: 800px;
  position: absolute;
  background-color: white;
  padding: 27px 30px 46px 30px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.16);
  transition: all 0.4s 0.1s ease;
}
.account-check {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 15px;
  left: 0;
  opacity: 1;
  visibility: visible;
  color: #000;
  text-decoration: none;
}
</style>
