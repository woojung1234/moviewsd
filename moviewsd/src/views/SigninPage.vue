<<template>
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
            <label for="password">비밀번호: </label>
            <input v-model="password" type="password" id="password" required placeholder="비밀번호를 입력하세요" />
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
            <label for="password">비밀번호: </label>
            <input v-model="password" type="password" id="password" required placeholder="비밀번호를 입력하세요" />
          </div>
          <div>
            <label for="passwordConfirm">비밀번호 확인: </label>
            <input v-model="passwordConfirm" type="password" id="passwordConfirm" required placeholder="비밀번호를 다시 입력하세요" />
            <span v-if="password !== passwordConfirm" class="error">비밀번호가 일치하지 않습니다.</span>
          </div>
          <div>
            <label>
              <input v-model="agreeTerms" type="checkbox" /> 약관 동의
            </label>
            <span v-if="!agreeTerms" class="error">약관에 동의해야 합니다.</span>
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

// 회원가입 처리
const submitSignup = () => {
  if (!isValidEmail.value || !email.value || !password.value || password.value !== passwordConfirm.value || !agreeTerms.value) {
    alert('입력값을 확인해주세요.');
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = users.some(user => user.email === email.value);

  if (userExists) {
    alert('이미 등록된 이메일입니다.');
    return;
  }

  users.push({ email: email.value, password: password.value });
  localStorage.setItem('users', JSON.stringify(users));

  alert('회원가입 성공!');
  toggleForm();
};

// 로그인 처리
const submitLogin = () => {
  if (!isValidEmail.value || !email.value || !password.value) {
    alert('입력값을 확인해주세요.');
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === email.value && user.password === password.value);

  if (!user) {
    alert('로그인 실패. 아이디와 비밀번호를 확인해주세요.');
    return;
  }

  localStorage.setItem('isLoggedIn', 'true');
  if (rememberMe.value) {
    localStorage.setItem('rememberMe', 'true');
  }

  alert('로그인 성공!');
  router.push('/');
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
