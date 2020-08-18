/*
 * @Date: 2020-08-10 10:46:03
 * @LastEditors: xujianxing
 * @LastEditTime: 2020-08-11 11:36:16
 * @FilePath: \hattool\src\utils\other.ts
 */

/**
 * 压缩css（x.min.css）
 * @param s css字符串
 */
export function compressCss(s) {
  s = s.replace(/\/\*(.|\n)*?\*\//g, ""); //删除注释
  s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
  s = s.replace(/\,[\s\.\#\d]*\{/g, "{"); //容错处理
  s = s.replace(/;\s*;/g, ";"); //清除连续分号
  s = s.match(/^\s*(\S+(\s+\S+)*)\s*$/); //去掉首尾空白
  return s == null ? "" : s[1];
}

/**
 * 延迟执行函数，返回的是 Promise
 * @param timestamp 延迟时间
 */
export function sleep(timestamp: number): Promise<any> {
  return new Promise((resolve) => setTimeout(resolve, timestamp));
}

/**
 * 延迟执行函数，回调函数方式
 * @param callback 回调函数
 * @param time 延迟时间
 */
export function sleepCallBack(callback, time: number) {
  if (typeof callback === "function") {
    setTimeout(callback, time);
  } else {
    throw new TypeError("callback is not function");
  }
}

/**
 * byteToSize 文件大小转换
 * @param bytes 文件字节大小
 */
export const bytesToSize = (bytes: number) => {
  if (bytes === 0) return "0 B";
  var k = 1024; // or 1024
  var sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toPrecision(3) + " " + sizes[i];
};

/**
 * 文件转base64
 * @param file 文件
 * @returns promise<base64 url>
 */
export const fileToBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    try {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        resolve(e.target.result);
      };
    } catch (error) {
      reject("Transform Err");
    }
  });
};

/**
 * 获取区间内随机数
 * @param min 区间下限
 * @param max 区间上限
 */
export function randomNum(min, max) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * min + 1 + "", 10);
    case 2:
      return parseInt(Math.random() * (max - min + 1) + min, 10);
    default:
      return 0;
  }
}

/**
 * 防抖函数
 * @param func 需要执行的函数
 * @param wait 等待时间
 * @param immediate 第一次立即执行
 */
export function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };
}

/**
 * 节流函数
 * @param func 执行的函数
 * @param wait 等待时间
 * @param type 1：事件戳方式；2：定时器方式
 */
export function throttle(func, wait, type) {
  let previous, timeout;
  if (type === 1) {
    previous = 0;
  } else if (type === 2) {
    timeout = null;
  }
  return function () {
    let context = this;
    let args = arguments;
    if (type === 1) {
      let now = Date.now();

      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          func.apply(context, args);
        }, wait);
      }
    }
  };
}

/**
 * 随机16进制颜色
 */
export const randomHexColor = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0);
};

/**
 * 生成uuid
 */
export const uuid = () => {
  const temp_url = URL.createObjectURL(new Blob());
  const uuid = temp_url.toString(); // blob:https://xxx.com/b250d159-e1b6-4a87-9002-885d90033be3
  URL.revokeObjectURL(temp_url);
  return uuid.substr(uuid.lastIndexOf("/") + 1);
};
