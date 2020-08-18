/*
 * @Date: 2020-08-10 10:26:52
 * @LastEditors: xujianxing
 * @LastEditTime: 2020-08-11 11:42:16
 * @FilePath: \hattool\src\utils\browser.ts
 */

/**
 * 获取页面上所有url
 */
export function getPageUrl() {
  return document.documentElement.outerHTML
    .match(
      /(url\(|src=|href=)[\"\']*([^\"\'\(\)\<\>\[\] ]+)[\"\'\)]*|(http:\/\/[\w\-\.]+[^\"\'\(\)\<\>\[\] ]+)/gi
    )
    .join("\r\n")
    .replace(/^(src=|href=|url\()[\"\']*|[\"\'\>\) ]*$/gim, "")
    .split("\r\n");
}

/**
 * 根据cookie的key获取cookie
 * @param name
 */
export function getCookie(name: string) {
  var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
  if (arr != null) return unescape(arr[2]);
  return null;
}

/**
 * 获取页面高度
 */
export function getPageHeight() {
  var g = document,
    a = g.body,
    f = g.documentElement,
    d = g.compatMode == "BackCompat" ? a : g.documentElement;
  return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
}

/**
 * 获取页面宽度
 */
export function getPageWidth() {
  var g = document,
    a = g.body,
    f = g.documentElement,
    d = g.compatMode == "BackCompat" ? a : g.documentElement;
  return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}

/**
 * 获取页面被卷去的宽度和高度
 */
export function getScrollXY() {
  return document.body.scrollTop
    ? {
        x: document.body.scrollLeft,
        y: document.body.scrollTop,
      }
    : {
        x: document.documentElement.scrollLeft,
        y: document.documentElement.scrollTop,
      };
}

/**
 * 获取页面可视区宽高
 */
export function getViewSize() {
  var de = document.documentElement;
  var db = document.body;
  var viewW = de.clientWidth == 0 ? db.clientWidth : de.clientWidth;
  var viewH = de.clientHeight == 0 ? db.clientHeight : de.clientHeight;
  return Array(viewW, viewH);
}

/**
 * 滚动到顶部 requestAnimationFrame
 */
export function scrollToTop() {
  var c = document.documentElement.scrollTop || document.body.scrollTop;

  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}

/**
 * 复制内容
 * @param value 复制的内容
 * @param toast 成功提示的函数
 */
export const copy = (value: string, toast?: Function) => {
  const inputDom = document.createElement("input");
  inputDom.value = value;
  document.body.appendChild(inputDom);
  inputDom.select(); // 选择对象
  document.execCommand("Copy"); // 执行浏览器复制命令
  document.body.removeChild(inputDom); // 删除DOM
  if (toast) {
    toast();
  } else {
    alert("复制成功");
  }
};

/**
 * 获取Get请求Url上的参数
 */
export function getLocationSearch() {
  const str = window.location.search;
  const arr = str.substr(1).split("&");
  const obj = {};
  for (const item of arr) {
    const data = item.split("=");
    obj[data[0]] = data[1];
  }
  return obj;
}

/**
 * 开启全屏显示
 * @param element 全屏的元素
 */
export function launchFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen();
  }
}

/**
 * 关闭全屏
 */
export function exitFullscreen() {
  const document = window.document as any;
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

/**
 * LocalStorage Function
 */
export const getStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const setStorage = (key: string, value: any, expire?: number) => {
  if (typeof value === "object") value = JSON.stringify(value);
  localStorage.setItem(key, value);
  if (!!expire) {
    setTimeout(() => {
      removeStorage(key);
    }, expire);
  }
};

export const removeStorage = (key) => {
  localStorage.removeItem(key);
};

export const cleanStorage = () => {
  localStorage.clear();
};

/**
 * SessionStorage Function
 */
export const getLocalSession = (key: string) => {
  return sessionStorage.getItem(key);
};

export const setLocalSession = (key: string, value: any, expire?: number) => {
  if (typeof value === "object") value = JSON.stringify(value);
  sessionStorage.setItem(key, value);
  if (!!expire) {
    setTimeout(() => {
      removeLocalSession(key);
    }, expire);
  }
};

export const removeLocalSession = (key) => {
  sessionStorage.removeItem(key);
};

export const clearLocalSession = () => {
  sessionStorage.clear();
};

/**
 * 是否在页面底部
 */
export function bottomVisible() {
  return (
    document.documentElement.clientHeight + window.scrollY >=
    (document.documentElement.scrollHeight ||
      document.documentElement.clientHeight)
  );
}
