<template>
  <div>
    <HeaderLayout />
    <h1 class="Title">로그인 성공했당</h1>
    <div>
      {{ user.name + '님 안녕하세요!' }}
    </div>
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

  computed: {
    user() {
      return this.$store.state.user
    },
  },
}
</script>

<style></style>
