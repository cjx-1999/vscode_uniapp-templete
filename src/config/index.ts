const baseConfig = {
  baseUrl: 'http://127.0.0.1:3000', // 后台接口请求地址
}
if (import.meta.env.MODE === 'production')
  baseConfig.baseUrl = 'http://115.28.62.66:3000'

export const config = baseConfig
