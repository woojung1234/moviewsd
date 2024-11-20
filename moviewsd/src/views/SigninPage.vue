<template>
  <div class="auth-container">
    <transition name="fade">
      <div v-if="isLogin" key="login">
        <h2>로그인</h2>
        <form @submit.prevent="submitLogin">
          <div>
            <label for="email">아이디 (이메일): </label>
            <input v-model="email" type="email" id="email" required placeholder="이메일을 입력하세요" />
            <span v-if="email && !isValidEmail" class="error">올바른 이메일 형식을 입력하세요.</span>
          </div>
          <div>
            <label for="apiKey">TMDB API Key: </label>
            <input v-model="apiKey" type="password" id="apiKey" required placeholder="TMDB API Key를 입력하세요" />
          </div>
          <div>
            <label>
              <input v-model="rememberMe" type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit">로그인</button>
        </form>
      </div>

      <div v-else key="signup">
        <h2>회원가입</h2>
        <form @submit.prevent="submitSignup">
          <div>
            <label for="email">아이디 (이메일): </label>
            <input v-model="email" type="email" id="email" required placeholder="이메일을 입력하세요" />
            <span v-if="email && !isValidEmail" class="error">올바른 이메일 형식을 입력하세요.</span>
          </div>
          <div>
            <label for="apiKey">TMDB API Key: </label>
            <input v-model="apiKey" type="password" id="apiKey" required placeholder="TMDB API Key를 입력하세요" />
          </div>
          <button type="submit">회원가입</button>
        </form>
      </div>
    </transition>
    <p @click="toggleForm">{{ isLogin ? '회원가입' : '로그인' }}으로 전환</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const apiKey = ref('');
const rememberMe = ref(false);
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

// 회원가입 처리
const submitSignup = () => {
  if (!isValidEmail.value || !email.value || !apiKey.value) {
    alert('입력값을 확인해주세요.');
    return;
  }

  // 로컬 스토리지에 이메일 및 API Key 저장
  localStorage.setItem(email.value, apiKey.value);
  alert('회원가입 성공!');
  toggleForm();
};

// 로그인 처리
const submitLogin = () => {
  if (!isValidEmail.value || !email.value || !apiKey.value) {
    alert('입력값을 확인해주세요.');
    return;
  }

  // 로컬 스토리지에서 API Key 확인
  const storedApiKey = localStorage.getItem(email.value);

  if (storedApiKey === apiKey.value) {
    alert('로그인 성공!');
    if (rememberMe.value) {
      localStorage.setItem('rememberMe', 'true');
    }
    router.push('/');
  } else {
    alert('로그인 실패. 아이디와 비밀번호(API Key)를 확인해주세요.');
  }
};
</script>

<style scoped>
.auth-container {
  width: 300px;
  margin: 0 auto;
  text-align: left;
}

form div {
  margin-bottom: 15px;
}

form button {
  width: 100%;
  padding: 10px;
}

p {
  cursor: pointer;
  text-align: center;
  color: #42b983;
}

.error {
  color: red;
  font-size: 12px;
}
</style>
