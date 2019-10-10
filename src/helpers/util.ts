const getToString = (value: any): string => Object.prototype.toString.call(value)

export function isDate(value: any): value is Date {
  return getToString(value) === '[object Date]'
}

export function isObject(value: any): value is Object {
  return getToString(value) === '[object Object]'
}
