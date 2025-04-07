import axios from 'axios'

var service = axios.create({
  baseURL: window.location.origin, // api的base_url
  timeout: 2000, // 请求超时时间
  responseType: 'json',
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'authToken': '',
    'userCode': '',
    'Content-Type': 'application/json;'
  }
})
// 处理 data
service.defaults.transformRequest = function (data: any) {
  return data
}
// request拦截器
service.interceptors.request.use((config: any) => {

  // let token = sessionStorage.getItem('token')
  // let userCode = JSON.parse(sessionStorage.getItem('userInfo')).userCode
  // config.headers['authToken'] = token
  // config.headers['userCode'] = userCode

  // config.headers['Content-Type'] = 'application/json;'
  // config.data = JSON.stringify(config.data)

  return config
}, (error: any) => {
  return Promise.reject(error)
})
// response拦截器
service.interceptors.response.use((response: any) => {
  return response
}, (error: any) => {
  return Promise.reject(error)
})
export default service
