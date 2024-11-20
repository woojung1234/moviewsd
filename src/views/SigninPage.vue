<template>
  <div class="auth-container">
    <!-- 로그아웃 버튼 -->
    <button
        v-if="isAuthenticated"
        @click="logout"
        class="logout-button"
    >
      로그아웃
    </button>

    <!-- 로그인/회원가입 폼 -->
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

    <!-- 폼 전환 링크 -->
    <p @click="toggleForm">{{ isLogin ? '회원가입' : '로그인' }}으로 전환</p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const apiKey = ref('');
const rememberMe = ref(false);
const isLogin = ref(true);
const isAuthenticated = ref(!!localStorage.getItem('email')); // 로그인 상태 확인

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

// 로그아웃
const logout = () => {
  localStorage.removeItem('email');
  localStorage.removeItem('rememberMe');
  isAuthenticated.value = false;
  alert('로그아웃 되었습니다.');
  router.push('/signin');
};

// 로그인 처리
const submitLogin = () => {
  if (!isValidEmail.value || !email.value || !apiKey.value) {
    alert('입력값을 확인해주세요.');
    return;
  }

  const storedApiKey = localStorage.getItem(email.value);

  if (storedApiKey === apiKey.value) {
    localStorage.setItem('email', email.value);
    if (rememberMe.value) {
      localStorage.setItem('rememberMe', 'true');
    }
    isAuthenticated.value = true;
    alert('로그인 성공!');
    router.push('/');
  } else {
    alert('로그인 실패. 아이디와 비밀번호(API Key)를 확인해주세요.');
  }
};

// 회원가입 처리
const submitSignup = () => {
  if (!isValidEmail.value || !email.value || !apiKey.value) {
    alert('입력값을 확인해주세요.');
    return;
  }

  localStorage.setItem(email.value, apiKey.value);
  alert('회원가입 성공!');
  toggleForm();
};

// 로그인 상태 감시 (필요 시 추가)
watch(isAuthenticated, (newVal) => {
  if (!newVal) {
    router.push('/signin');
  }
});
</script>

<style scoped>
.auth-container {
  width: 300px;
  margin: 0 auto;
  text-align: left;
}

.logout-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  margin-bottom: 20px;
  border-radius: 5px;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
