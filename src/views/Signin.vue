<template>
  <div>
    <!-- 로그인/회원가입 전환 버튼 -->
    <button @click="toggleForm">Switch to {{ isLogin ? 'Sign Up' : 'Login' }}</button>

    <!-- 로그인 폼 -->
    <div v-if="isLogin">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input type="email" v-model="email" placeholder="Enter your email" required />
        <input type="password" v-model="password" placeholder="Enter your password" required />
        <label>
          <input type="checkbox" v-model="rememberMe" /> Remember me
        </label>
        <button type="submit">Login</button>
      </form>
    </div>

    <!-- 회원가입 폼 -->
    <div v-else>
      <h2>Sign Up</h2>
      <form @submit.prevent="signup">
        <input type="email" v-model="email" placeholder="Enter your email" required />
        <input type="password" v-model="password" placeholder="Enter your password" required />
        <input type="password" v-model="confirmPassword" placeholder="Confirm your password" required />
        <label>
          <input type="checkbox" v-model="agreeTerms" /> I agree to the terms and conditions
        </label>
        <button type="submit" :disabled="!agreeTerms">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true, // 로그인/회원가입 전환을 위한 변수
      email: '',
      password: '',
      confirmPassword: '',
      rememberMe: false,
      agreeTerms: false,
    };
  },
  methods: {
    toggleForm() {
      this.isLogin = !this.isLogin;
    },
    login() {
      // 이메일 형식 확인
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(this.email)) {
        alert('Invalid email format');
        return;
      }

      // 로그인 API 호출 (TMDB API 키를 사용하여 실제 검증하는 로직 추가 가능)
      // 성공 시 localStorage에 이메일, 비밀번호 저장
      localStorage.setItem('email', this.email);
      localStorage.setItem('password', this.password);

      // 로그인 성공 시 메인 페이지로 리디렉션
      this.$router.push('/');
    },
    signup() {
      // 비밀번호 확인
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      if (!this.agreeTerms) {
        alert('You must agree to the terms and conditions');
        return;
      }

      // 회원가입 API 호출 (TMDB API 또는 별도의 회원가입 API)
      // 성공 시 자동 로그인 및 로그인 페이지로 리디렉션
      localStorage.setItem('email', this.email);
      localStorage.setItem('password', this.password);

      alert('Sign up successful! Logging you in...');
      this.$router.push('/signin');
    },
  },
  created() {
    // 로그인 상태 확인
    const email = localStorage.getItem('email');
    if (email) {
      this.$router.push('/');
    }
  },
};
</script>
