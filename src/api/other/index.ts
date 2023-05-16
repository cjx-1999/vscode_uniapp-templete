// 每日一言

export function OneDay() {
  return uni.request({
    method: 'GET',
    url: 'https://v.api.aa1.cn/api/yiyan/index.php',
  })
}
// 名人名言

export function famousQuotes() {
  return uni.request({
    method: 'GET',
    url: 'https://v.api.aa1.cn/api/api-wenan-mingrenmingyan/index.php?aa1=json',
  })
}
