<template>
  <header class="title">
    <nuxt-link class="logo" to="/">로그인 페이지</nuxt-link>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}
.logo {
  font-weight: 900;
}
.logo:visited {
  color: inherit;
}
</style>
