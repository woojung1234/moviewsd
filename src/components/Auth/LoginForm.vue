<template>
  <form @submit.prevent="handleLogin">
    <h1>Sign in</h1>
    <InputField
        id="email"
        label="Username or Email"
        v-model="email"
        type="email"
        required
    />
    <InputField
        id="password"
        label="Password"
        v-model="password"
        type="password"
        required
    />
    <Checkbox
        id="remember"
        v-model="rememberMe"
        label="Remember me"
    />
    <button :disabled="!isLoginFormValid">Login</button>
  </form>
</template>

<script>
import InputField from "@/components/Auth/InputField.vue";
import Checkbox from "@/components/Auth/Checkbox.vue";
import { useToast } from "vue-toastification";

export default {
  components: { InputField, Checkbox },
  props: {
    email: String,
    password: String,
    rememberMe: Boolean,
    isLoginFormValid: Boolean,
  },
  emits: ["login"],
  methods: {
    async handleLogin() {
      try {
        this.$emit("login");
      } catch (error) {
        const toast = useToast();
        toast.error("Invalid API Key. Please check and try again.");
      }
    },
  },
};
</script>
