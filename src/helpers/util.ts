const getToString = (value: any): string => Object.prototype.toString.call(value)

export function isDate(value: any): value is Date {
  return getToString(value) === '[object Date]'
}

export function isObject(value: any): value is Object {
  return getToString(value) === '[object Object]'
}

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
