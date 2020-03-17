import axios from 'axios'

// 创建 axios 实例
const axiosGlobal = axios.create({
    timeout: 6000 // 请求超时时间
  })

  axiosGlobal.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config
  }, function (error) {
    // Do something with request error
    return Promise.reject(error)
  })

  axiosGlobal.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  })

  export default axiosGlobal
