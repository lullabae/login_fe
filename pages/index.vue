<template>
  <div>
    <HeaderLayout />
    <h1 class="Title">안녕하세요 ^_^</h1>
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from '~/components/main/Header-layout.vue'
import FooterLayout from '~/components/main/Footer-layout.vue'

export default {
  components: {
    HeaderLayout,
    FooterLayout,
  },
}
</script>

<style>
.Title {
  margin-top: 200px;
  text-align: center;
  color: purple;
}
</style>
