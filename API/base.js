/* axios 초기 세팅 */
import qs from 'querystring'
import axios from 'axios'
import { cacheAdapterEnhancer } from 'axios-extensions'
// import API_URL from '~/constants/api'
import config, { isDev } from '~/config'
import { loadTokenFromStorage } from '~/util/authToken'

/* axios 공통 config */
const axiosInstance = axios.create({
  withCredentials: false,
  baseURL: 'http://localhost:8000',
  timeout: config.API_TIMEOUT,
  headers: { 'Cache-Control': 'no-cache' },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter),
})

/* axios interceptors - request */
axiosInstance.interceptors.request.use(
  (request) => {
    const authToken = loadTokenFromStorage()

    // 저장된 token이 있으면 불러와서 request에 Authorization token 첨부
    if (authToken) request.headers.Authorization = `Bearer ${authToken}`

    return request
  },
  (error) => Promise.reject(error)
)

/* axios interceptors - response */
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const errorCode = error.response?.status

    // /* 일부 에러 코드에 대해서는 공통 에러 메시지 표출 */
    // if (error.code === 'ECONNABORTED') {
    //   $nuxt.$message.error($nuxt.$MSG.ERROR_CODE_ECONNABORTED)
    // }

    // if ([500].includes(errorCode)) {
    //   $nuxt.$message.error($nuxt.$MSG[`ERROR_CODE_${errorCode}`])
    // }

    if (![401, 409].includes(errorCode)) {
      try {
        !isDev &&
          axios.post('http://localhost:8000'.UNKNOWN_ERROR_LOG, {
            endpoint: error?.config.url,
            errorCode,
            message:
              JSON.stringify(error, Object.getOwnPropertyNames(error)) ||
              error?.message,
            error: JSON.stringify({
              // userId: $nuxt?.$store?.state?.auth?.currentUser?.admin_user_id,
              config: error?.config,
              isAxiosError: error?.isAxiosError,
              request: error?.request,
              response: error?.response,
            }),
          })
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log('핸들링 안된 에러 발생')
      }
    }

    return Promise.reject(error)
  }
)

/* baseAPI 정의 */
const baseAPI = {
  get: (url, params, forceUpdate = false, arrayFormat = 'repeat', config) =>
    axiosInstance.get(url, {
      forceUpdate,
      params,

      // [1,2,3] 형태의 배열을 "1,2,3" 형태로 stringify한 후 전송
      paramsSerializer: (params) => qs.stringify(params, { arrayFormat }),
      ...config,
    }),
  post: (url, data, config) => axiosInstance.post(url, data, config),
  put: (url, data, config) => axiosInstance.put(url, data, config),
  delete: (url, params) => axiosInstance.delete(url, { data: { ...params } }),
}

export default baseAPI
