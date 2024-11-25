<template>
  <form @submit.prevent="handleRegister">
    <h1>회원가입</h1>
    <div class="input" :class="{ active: isEmailFocused || email }">
      <input
          id="register-email"
          type="email"
          v-model="email"
          @focus="focusInput('email')"
          @blur="blurInput('email')"
          required
      />
      <label for="register-email">Email</label>
    </div>
    <div class="input" :class="{ active: isPasswordFocused || password }">
      <input
          id="register-password"
          type="password"
          v-model="password"
          @focus="focusInput('password')"
          @blur="blurInput('password')"
          required
      />
      <label for="register-password">Password</label>
    </div>
    <div class="input" :class="{ active: isConfirmPasswordFocused || confirmPassword }">
      <input
          id="confirm-password"
          type="password"
          v-model="confirmPassword"
          @focus="focusInput('confirmPassword')"
          @blur="blurInput('confirmPassword')"
          required
      />
      <label for="confirm-password">Confirm Password</label>
    </div>
    <span class="checkbox">
      <input type="checkbox" id="terms" v-model="acceptTerms" required />
      <label for="terms">I agree to the Terms and Conditions</label>
    </span>
    <button :disabled="!isSignupFormValid">Register</button>
  </form>
</template>

<script setup>
import { ref, computed } from "vue";
import { useToast } from "vue-toastification";

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const acceptTerms = ref(false);
const isEmailFocused = ref(false);
const isPasswordFocused = ref(false);
const isConfirmPasswordFocused = ref(false);

const toast = useToast();

const isSignupFormValid = computed(() => {
  return email.value && password.value && confirmPassword.value === password.value && acceptTerms.value;
});

const focusInput = (inputName) => {
  if (inputName === "email") isEmailFocused.value = true;
  if (inputName === "password") isPasswordFocused.value = true;
  if (inputName === "confirmPassword") isConfirmPasswordFocused.value = true;
};

const blurInput = (inputName) => {
  if (inputName === "email") isEmailFocused.value = false;
  if (inputName === "password") isPasswordFocused.value = false;
  if (inputName === "confirmPassword") isConfirmPasswordFocused.value = false;
};

const handleRegister = async () => {
  try {
    const existingAccount = localStorage.getItem(email.value);
    if (existingAccount) {
      toast.error("This email is already registered.");
      return;
    }

    localStorage.setItem(email.value, JSON.stringify({ password: password.value }));
    toast.success("Registration successful!");
  } catch (error) {
    toast.error("Registration failed. Please try again.");
  }
};
</script>

<style scoped>
</style>
