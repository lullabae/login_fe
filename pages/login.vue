<template>
  <div>
    <HeaderLayout />
    <h1 class="Title">로그인 페이지</h1>
    <LoginForm />
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from '~/components/main/Header-layout.vue'
import FooterLayout from '~/components/main/Footer-layout.vue'
import LoginForm from '~/components/login/LoginForm.vue'

export default {
  components: {
    HeaderLayout,
    FooterLayout,
    LoginForm,
  },
}
</script>

<style>
.Title {
  margin-top: 70px;
  text-align: center;
  color: purple;
}
</style>
