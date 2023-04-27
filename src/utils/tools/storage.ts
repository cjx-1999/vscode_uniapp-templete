// 封装 uni.setStorageSync

import { isObject } from '@/utils/tools'

function setData(data: any) {
  const data1 = data && (isObject(data) ? JSON.stringify(data) : data)
  return data1
}

export function setStorageSync(key: string, data: any) {
  uni.setStorageSync(key, setData(data))
}

export function getStorageSync(key: string) {
  const data = uni.getStorageSync(key)
  return setData(data)
}

// 同步移除
export function removeStorageSync(key: string) {
  uni.removeStorageSync(key)
}

// 封装 uni 异步存储
export function setStorage(key: string, data: any) {
  uni.setStorage({
    key,
    data: setData(data),
  })
}

export function getStorage(key: string) {
  uni.getStorage({
    key,
    success(res) {
      return setData(res.data)
    },
  })
}

export function removeStorage(key: string) {
  uni.removeStorage({
    key,
  })
}
