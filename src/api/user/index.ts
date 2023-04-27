import { get } from '../http'

const userApi = '/user'
export function getUserList() {
  return get(`${userApi}`)
}
export function getUserInfo(name) {
  return get(`${userApi}/detail?name=${name}`)
}
