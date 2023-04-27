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
