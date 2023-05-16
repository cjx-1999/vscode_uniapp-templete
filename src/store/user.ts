import { defineStore } from 'pinia'

export const userStore = defineStore('userStore', {
  state: () => ({
    user: 'cjx',
  }),
  getters: {},
  actions: {

  },
  persist: {
    enabled: true, // 开启缓存，默认会话存储
  },
})
