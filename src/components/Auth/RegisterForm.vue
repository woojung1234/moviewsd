<template>
  <form @submit.prevent="handleRegister">
    <h1>Sign up</h1>
    <InputField
        id="register-email"
        label="Email"
        v-model="registerEmail"
        type="email"
        required
    />
    <InputField
        id="register-password"
        label="Password"
        v-model="registerPassword"
        type="password"
        required
    />
    <InputField
        id="confirm-password"
        label="Confirm Password"
        v-model="confirmPassword"
        type="password"
        required
    />
    <Checkbox
        id="terms"
        v-model="acceptTerms"
        label="I have read Terms and Conditions"
        required
    />
    <button :disabled="!isRegisterFormValid">Register</button>
  </form>
</template>

<script>
import InputField from "@/components/Auth/InputField.vue";
import Checkbox from "@/components/Auth/Checkbox.vue";
import { useToast } from "vue-toastification";

export default {
  components: { InputField, Checkbox },
  props: {
    registerEmail: String,
    registerPassword: String,
    confirmPassword: String,
    acceptTerms: Boolean,
    isRegisterFormValid: Boolean,
  },
  emits: ["register"],
  methods: {
    async handleRegister() {
      try {
        this.$emit("register");
      } catch (error) {
        const toast = useToast();
        toast.error("Invalid API Key for registration.");
      }
    },
  },
};
</script>
