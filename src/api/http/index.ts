// 封装 uni.request

import type { httpType } from './type'
import { getStorageSync, setStorageSync, showToast } from '@/utils/tools'
import { config } from '@/config'

type RequestOptions = UniNamespace.RequestOptions
type RequestSuccessCallbackResult = UniNamespace.RequestSuccessCallbackResult
function http(url: string, data?: any, method: httpType = 'GET'): Promise<any> {
  const requestConfig: RequestOptions = {
    url: config.baseUrl + url,
    data,
    timeout: 10000,
    method,
    header: {
      'content-type': 'application/json',
    },

  }
  // 请求拦截器
  uni.addInterceptor('request', {
    invoke(config: RequestOptions = requestConfig) {
      // 添加请求头
      const token = getStorageSync('token')
      if (token)
        config.header.Authorization = `Bearer ${token}`
    },
    success(res) { // 这里是响应数据
      // eslint-disable-next-line no-prototype-builtins
      const bol = res.data.hasOwnProperty('token')
      if (res.data && bol)
        setStorageSync('token', res.data.token)
      return res.data
    },
    fail(err) {
      showToast(err.errMsg)
      return Promise.reject(err)
    },
  })

  return new Promise((resolve, reject) => {
    uni.request({
      ...requestConfig,
      success: (res: RequestSuccessCallbackResult) => {
        resolve(res.data)
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
}
// 封装get请求
export function get(url: string, data?: any): Promise<any> {
  return http(url, data, 'GET')
}
// 封装post请求
export function post(url: string, data?: any): Promise<any> {
  return http(url, data, 'POST')
}
// 封装put请求
export function put(url: string, data?: any): Promise<any> {
  return http(url, data, 'PUT')
}
// 封装delete请求
export function del(url: string, data?: any): Promise<any> {
  return http(url, data, 'DELETE')
}
