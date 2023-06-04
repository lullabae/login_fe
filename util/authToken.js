import Cookies from 'js-cookie'

// if (typeof window !== "undefined") {
//   var { localStorage, sessionStorage } = window
// }

export const loadTokenFromStorage = () => {
  /* 자동 로그인 시 localStorage 에 토큰 저장. 만료 될 가능성이 있는 localStorage 를 맨 끝에 위치 */
  return (
    Cookies.get('token') ||
    sessionStorage.getItem('token') ||
    localStorage.getItem('token')
  )
}

export const saveTokenToLocalStorage = (item) => {
  const parsedToken = item.substring(7)
  return localStorage.setItem('token', parsedToken)
}

export const clearTokenFromLocalStorage = () => localStorage.removeItem('token')

export const saveTokenToSessionStorage = (item) => {
  const parsedToken = item.substring(7)
  return sessionStorage.setItem('token', parsedToken)
}

export const clearTokenFromSessionStorage = () =>
  sessionStorage.removeItem('token')

export const saveTokenToCookie = (item) => {
  const parsedToken = item.substring(7)

  return Cookies.set('token', parsedToken)
}

export const clearTokenFromCookie = () => Cookies.remove('token')

/* ID */

export const saveIdToLocalStorage = (id) => localStorage.setItem('savedId', id)

export const loadIdFromLocalStorage = () => localStorage.getItem('savedId')

export const clearIdFromLocalStorage = () => localStorage.removeItem('savedId')
