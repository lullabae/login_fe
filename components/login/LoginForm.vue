<template>
  <div>
    <form class="login-form" @submit.prevent="handleLogin">
      <input
        v-model="id"
        type="text"
        placeholder="아이디 입력칸"
        class="input-field"
      />
      <input
        v-model="pw"
        type="password"
        placeholder="비번 입력칸"
        class="input-field"
      />
      <button type="submit" class="login-accept-button">Login</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
// import { mapGetters, mapActions } from 'vuex'
// import {
//   saveTokenToLocalStorage,
//   saveIdToLocalStorage,
//   saveTokenToCookie,
// } from '~/util/authToken'

export default {
  components: {},

  data() {
    return {
      /* form binding을 위한 state */
      id: '',
      pw: '',
      // saveId: false,
      autoLogin: false,
      isDev: false,
      Users: {
        id: ['가가', '나나', '다다'],
        pw: ['123', '456', '789'],
        name: ['김가가', '이나나', '박다다'],
      },
    }
  },

  computed: {
    ...mapGetters('auth', ['permissionOfCurrentBrand']),
  },

  watch: {
    autoLogin(newValue) {
      if (newValue) this.saveId = newValue
    },

    saveId(newValue) {
      if (!newValue) this.autoLogin = newValue
    },
  },

  created() {
    this.isDev = process.env.NUXT_ENV_BUILD === 'development'
  },

  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('http://localhost:8000/login', {
          id: this.id,
          pw: this.pw,
        })

        if (response.data.success) {
          this.$store.commit('setUser', {
            id: this.id,
            name: response.data.name,
          })
          this.$router.push('/home')
        } else {
          alert('다시')
        }
      } catch (error) {
        console.error(error)
      }
    },
  },

  //   mounted() {
  //     this.$nextTick(() => {
  //       const { query } = this.$route
  //       if (query.di) this.id = query.di
  //       if (query.dp) this.pw = query.dp
  //     })
  //   },

  //   methods: {
  //     ...mapActions('auth', ['loginRequest', 'loginStatusRequest']),

  //     handleLogin() {
  //       const { id, pw, saveId, autoLogin } = this

  //       /* '아이디 저장'에 체크가 되어 있으면 아이디 로컬스토리지에 저장 */
  //       if (saveId) saveIdToLocalStorage(id)

  //       this.loginRequest({ id, pw })
  //         /* 로그인에 성공한 경우 */
  //         .then((token) => {
  //           /* '자동 로그인'을 체크했다면 로컬스토리지에, 체크하지 않았다면 쿠키에 토큰 저장 */
  //           if (autoLogin) saveTokenToLocalStorage(token)
  //           else saveTokenToCookie(token)
  //         })

  //         /* 저장한 토큰으로 유저 상태 불러오기 */
  //         .then(() => this.loginStatusRequest())

  //         // /* 쿼리 스트링에 refUrl이 있으면 refUrl로 이동하고, 그렇지 않다면 랜딩 페이지로 이동 */
  //         // .then(() => {
  //         //   const refUrl = $nuxt.$route.query?.r
  //         //   $nuxt.$router.replace(refUrl ?? $nuxt.$PAGES.LANDING)
  //         // })
  //         .catch((err) => {
  //           if (err === 'SUSPENDED_ACCOUNT') this.$message.info('감승원 바보')
  //           else this.$message.error(this.$MSG.LOGIN_FAIL)
  //         })
  //     },
  //   },
}
</script>

<style>
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

.login-accept-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  margin: auto;
}
</style>
