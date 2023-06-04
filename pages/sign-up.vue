<template>
  <div>
    <h1 class="Title">회원가입 페이지</h1>
    <form class="login-form" @submit.prevent="login">
      <input
        v-model="userId"
        type="text"
        placeholder="아이디 입력칸"
        class="input-field"
      />
      <input
        v-model="password"
        type="password"
        placeholder="비번 입력칸"
        class="input-field"
      />
      <input
        v-model="email"
        type="text"
        placeholder="이메일 입력칸"
        class="input-field"
      />
      <input
        v-model="phone"
        type="text"
        placeholder="전화번호 입력칸"
        class="input-field"
      />
      <button type="submit" class="login-button">회원가입</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      userId: '',
      password: '',
      email: '',
      phone: '',
    }
  },
  methods: {
    async login() {
      try {
        await axios.post('/api/login', {
          useId: this.userId,
          password: this.password,
          email: this.email,
          phone: this.phone,
        })
        // this.$store.commit('setToken', response.data.token)
        // this.$router.push('/')
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style>
.Title {
  text-align: center;
  color: purple;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-field {
  margin-bottom: 10px;
  padding: 5px 10px;
  width: 200px;
}

.login-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
}
</style>
