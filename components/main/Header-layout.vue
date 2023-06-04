<template>
  <div class="header">
    <NuxtLink to="/">
      <nuxt-link class="logo" to="/">LULLA</nuxt-link>
    </NuxtLink>
    <NuxtLink to="/login" class="login-button">
      <button class="sml-btn">로그인 / 회원가입</button>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'HeaderLayout',
}
</script>

<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0px 20px;
  background-color: #222;
  justify-content: flex-end;
}

.logo {
  color: #fff;
  font-size: 3em;
  text-decoration: none;
  margin-right: auto;
}

.login-button {
  margin-left: auto;
  margin-right: 30px;
  float: right;
}

.sml-btn {
  font-size: 16px;
  font-weight: 600;
  color: #222;
  border-radius: 4px;
  background-color: #ffbc05;
  padding: 5px 12px;
  margin: auto 0;
}
</style>
