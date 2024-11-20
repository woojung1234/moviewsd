<template>
  <div class="auth-container">
    <!-- 로그인/회원가입 폼 -->
    <transition name="fade" mode="out-in">
      <div v-if="isLogin" key="login" class="form-container">
        <h2>로그인</h2>
        <form @submit.prevent="submitLogin">
          <div class="form-group">
            <label for="email">아이디 (이메일):</label>
            <input v-model="email" type="email" id="email" required placeholder="이메일을 입력하세요" />
            <span v-if="email && !isValidEmail" class="error">올바른 이메일 형식을 입력하세요.</span>
          </div>
          <div class="form-group">
            <label for="password">비밀번호:</label>
            <input v-model="password" type="password" id="password" required placeholder="비밀번호를 입력하세요" />
          </div>
          <div class="form-group remember-me">
            <label>
              <input v-model="rememberMe" type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" class="btn">로그인</button>
        </form>
      </div>

      <div v-else key="signup" class="form-container">
        <h2>회원가입</h2>
        <form @submit.prevent="submitSignup">
          <div class="form-group">
            <label for="email">아이디 (이메일):</label>
            <input v-model="email" type="email" id="email" required placeholder="이메일을 입력하세요" />
            <span v-if="email && !isValidEmail" class="error">올바른 이메일 형식을 입력하세요.</span>
          </div>
          <div class="form-group">
            <label for="password">비밀번호:</label>
            <input v-model="password" type="password" id="password" required placeholder="비밀번호를 입력하세요" />
          </div>
          <div class="form-group">
            <label for="passwordConfirm">비밀번호 확인:</label>
            <input v-model="passwordConfirm" type="password" id="passwordConfirm" required placeholder="비밀번호를 다시 입력하세요" />
            <span v-if="password !== passwordConfirm" class="error">비밀번호가 일치하지 않습니다.</span>
          </div>
          <div class="form-group agree-terms">
            <label>
              <input v-model="agreeTerms" type="checkbox" /> 약관 동의
            </label>
            <span v-if="!agreeTerms" class="error">약관에 동의해야 합니다.</span>
          </div>
          <button type="submit" class="btn">회원가입</button>
        </form>
      </div>
    </transition>

    <!-- 전환 버튼 -->
    <p class="toggle-form" @click="toggleForm">
      {{ isLogin ? '회원가입' : '로그인' }}으로 전환
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const email = ref('');
const password = ref('');
const passwordConfirm = ref('');
const rememberMe = ref(false);
const agreeTerms = ref(false);
const isLogin = ref(true);

const router = useRouter();

// 이메일 형식 확인
const isValidEmail = computed(() => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email.value);
});

// 폼 전환
const toggleForm = () => {
  isLogin.value = !isLogin.value;
};

// 로그인 처리
const submitLogin = async () => {
  if (!isValidEmail.value || !email.value || !password.value) {
    alert('입력값을 확인해주세요.');
    return;
  }

  try {
    const apiKey = process.env.VUE_APP_TMDB_API_KEY;

    const tokenResponse = await axios.get(
        `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`
    );

    const requestToken = tokenResponse.data.request_token;

    await axios.post(
        `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
        {
          username: email.value,
          password: password.value,
          request_token: requestToken,
        }
    );

    localStorage.setItem('email', email.value);
    if (rememberMe.value) {
      localStorage.setItem('rememberMe', 'true');
    }

    alert('로그인 성공!');
    router.push('/');
  } catch (error) {
    console.error('로그인 실패:', error.response?.data || error.message);
    alert('로그인 실패. 아이디와 비밀번호를 확인해주세요.');
  }
};

// 회원가입 처리
const submitSignup = () => {
  if (!isValidEmail.value || !email.value || !password.value || password.value !== passwordConfirm.value || !agreeTerms.value) {
    alert('입력값을 확인해주세요.');
    return;
  }

  localStorage.setItem('email', email.value);
  localStorage.setItem('password', password.value);

  alert('회원가입 성공!');
  toggleForm();
};
</script>

<style scoped>
.auth-container {
  width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
}

.form-container {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.form-group {
  margin-bottom: 15px;
}

.error {
  color: red;
  font-size: 12px;
}

.btn {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #369f6d;
}

.toggle-form {
  cursor: pointer;
  color: #42b983;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
