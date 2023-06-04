export default () => ({
  /* API에서 불러오는 유저 정보 */
  isLoggedIn: false,
  authToken: null,

  /* 현재 로그인한 유저 정보 */
  currentUser: {
    user_id: '',
    user_pw: '',
    user_nm: '',
  },
})

export const state = () => ({
  user: {
    id: null,
    name: null,
  },
})

export const mutations = {
  setUser(state, user) {
    state.user.id = user.id
    state.user.name = user.name
  },
}
