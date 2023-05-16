// 判断一个变量的类型
export function typeOf(obj: any): string {
  const toString = Object.prototype.toString
  const map: any = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object',
  }
  return map[toString.call(obj)]
}

// 判断是否是对象类型
export function isObject(obj: any): boolean {
  return typeOf(obj) === 'object'
}

// json打印
export function jsonLog(obj: object) {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(obj))
}
// json弹窗
export function jsonAlert(obj: object) {
  alert(JSON.stringify(obj))
}

// 生成随机16进制颜色
export function randomColor(): string {
  return `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padEnd(6, '0')}`
}
// 生成随机rgb颜色
export function randomRgbColor(): string {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r},${g},${b})`
}
// 生成随机rgba颜色
export function randomRgbaColor(): string {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  const a = Math.random().toFixed(1)
  return `rgba(${r},${g},${b},${a})`
}

// 判断对象是否包含某个属性
function hasOwn(obj: object, key: string) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}
