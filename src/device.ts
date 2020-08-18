/*
 * @Date: 2020-08-10 14:13:02
 * @LastEditors: xujianxing
 * @LastEditTime: 2020-08-11 11:40:58
 * @FilePath: \hattool\src\utils\device.ts
 */
/**
 * 是否是安卓
 */
export function isAndroid() {
  return /android/i.test(navigator.userAgent.toLowerCase());
}
/**
 * 是否是IOS
 */
export function isApple() {
  return /iphone|ipod|ipad|macintosh/i.test(navigator.userAgent.toLowerCase());
}

/**
 * 是否移动设备
 */
export function isMobileUserAgent() {
  return /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(
    window.navigator.userAgent.toLowerCase()
  );
}
