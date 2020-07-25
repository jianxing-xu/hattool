/*
 * @Date: 2020-07-23 13:19:27
 * @LastEditors: xujianxing
 * @LastEditTime: 2020-07-23 14:49:17
 * @FilePath: \hattool\src\common.ts
 */

export function getType(obj: any): string {
  return Object.prototype.toString.call(obj);
}
export const isArr = (obj): boolean => getType(obj) == "[object Array]";
export const isDate = (obj): boolean => getType(obj) == "[object Date]";
export const isObj = (obj): boolean => getType(obj) == "[object Object]";
export const isStr = (obj): boolean => getType(obj) == "[object String]";
export const isNum = (obj): boolean => getType(obj) == "[object Number]";
export const isBol = (obj): boolean => getType(obj) == "[object Boolean]";
export const isFun = (obj): boolean => getType(obj) == "[object Function]";
export const isUnd = (obj): boolean => getType(obj) == "[object Undefined]";
export const isNull = (obj): boolean => getType(obj) == "[object Null]";
export const isReg = (obj): boolean => getType(obj) == "[object RegExp]";
export const isSym = (obj): boolean => getType(obj) == "[object Symbol]";
