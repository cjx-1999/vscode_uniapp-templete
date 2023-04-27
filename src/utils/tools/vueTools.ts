// 将对象转换为普通对象并打印
import { toRaw } from 'vue'

export function mLog(observed: any, msg: string): any {
  // eslint-disable-next-line no-console
  console.log(toRaw(observed), msg)
}

export function jsonLogRaw(observed: any): any {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(toRaw(observed)))
}
