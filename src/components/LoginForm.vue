<template>
  <form @submit.prevent="handleLogin">
    <h1>로그인</h1>
    <div class="input" :class="{ active: isEmailFocused || email }">
      <input
          id="email"
          type="email"
          v-model="email"
          @focus="focusInput('email')"
          @blur="blurInput('email')"
          required
      />
      <label for="email">Email</label>
    </div>
    <div class="input" :class="{ active: isPasswordFocused || password }">
      <input
          id="password"
          type="password"
          v-model="password"
          @focus="focusInput('password')"
          @blur="blurInput('password')"
          required
      />
      <label for="password">Password</label>
    </div>
    <span class="checkbox remember">
      <input type="checkbox" id="remember" v-model="rememberMe" />
      <label for="remember" class="read-text">Remember me</label>
    </span>
    <button :disabled="!isLoginFormValid">Login</button>
  </form>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";

const email = ref("");
const password = ref("");
const rememberMe = ref(false);
const isEmailFocused = ref(false);
const isPasswordFocused = ref(false);

const router = useRouter();
const store = useStore();
const toast = useToast();

const isLoginFormValid = computed(() => email.value && password.value);

const focusInput = (inputName) => {
  if (inputName === "email") isEmailFocused.value = true;
  if (inputName === "password") isPasswordFocused.value = true;
};

const blurInput = (inputName) => {
  if (inputName === "email") isEmailFocused.value = false;
  if (inputName === "password") isPasswordFocused.value = false;
};

const handleLogin = async () => {
  try {
    const response = await store.dispatch("login", {
      apiKey: password.value,
      user: { email: email.value },
    });
    if (response) {
      if (rememberMe.value) {
        localStorage.setItem("email", email.value);
      }
      toast.success("Login successful!");
      router.push("/");
    }
  } catch (error) {
    toast.error("Login failed. Please check your credentials.");
  }
};
</script>

<style scoped>
</style>
