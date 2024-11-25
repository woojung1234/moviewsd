<template>
  <div>
    <Background />
    <AuthCard
        :isLoginVisible="isLoginVisible"
        @toggle="toggleCard"
    >
      <template v-if="isLoginVisible">
        <LoginForm
            :email="email"
            :password="password"
            :rememberMe="rememberMe"
            :isLoginFormValid="isLoginFormValid"
            @login="handleLogin"
        />
      </template>
      <template v-else>
        <RegisterForm
            :registerEmail="registerEmail"
            :registerPassword="registerPassword"
            :confirmPassword="confirmPassword"
            :acceptTerms="acceptTerms"
            :isRegisterFormValid="isRegisterFormValid"
            @register="handleRegister"
        />
      </template>
    </AuthCard>
  </div>
</template>
