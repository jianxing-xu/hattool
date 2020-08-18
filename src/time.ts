/*
 * @Date: 2020-07-22 13:54:38
 * @LastEditors: xujianxing
 * @LastEditTime: 2020-08-18 15:24:24
 * @FilePath: \hattool\src\time.ts
 */

import { isNull, isUnd, isDate, isNum } from "./common";

/**
 * 获取去这一天 00:00 的时间戳
 * @param {Date} time 日期
 */
export function getZero(time) {
  return (
    time.getTime() -
    (time.getHours() * 3600000 +
      time.getMinutes() * 60 * 1000 +
      time.getSeconds() * 1000)
  );
}

/**
 * 传入一个时间，判断是否是昨天。
 * @param {number|Date} date timestamp or new Date()
 */
export function isYearstoday(date: Date | number) {
  let time: any;
  let now: any = new Date();
  if (isNull(date) || isUnd(date)) throw new Error("params date is required !");
  if (!isNum(date) && !isDate(date))
    throw new TypeError("params error!only Number or Date");
  time = new Date(date);
  time = getZero(time);
  now = getZero(now);
  return now - time >= 86400000;
}

/**
 * 传入时间戳，转换指定的时间格式
 * @param {any} date      时间戳
 * @param {string} dateType 要得到的时间格式 例如 YYYY-MM-DD hh:mm:ss
 * @return dataStr 例如 YYYY-MM-DD hh:mm:ss
 */
export const formatTime = (
  date: Date | number = +new Date(),
  dateType: string = "YYYY-MM-DD hh:mm:ss"
) => {
  // 将字符串转换成数字
  const timeStamp = +new Date(date);

  // 如果转换成数字出错
  if (!timeStamp) {
    return date;
  }
  let str;
  // 得到时间字符串
  const dateStr: any = new Date(timeStamp);
  str = dateType.replace("YYYY", dateStr.getFullYear());
  str = str.replace(
    "MM",
    (dateStr.getMonth() + 1 < 10 ? "0" : "") + (dateStr.getMonth() + 1)
  );
  str = str.replace(
    "DD",
    (dateStr.getDate() < 10 ? "0" : "") + dateStr.getDate()
  );
  str = str.replace(
    "hh",
    (dateStr.getHours() < 10 ? "0" : "") + dateStr.getHours()
  );
  str = str.replace(
    "mm",
    (dateStr.getMinutes() < 10 ? "0" : "") + dateStr.getMinutes()
  );
  str = str.replace(
    "ss",
    (dateStr.getSeconds() < 10 ? "0" : "") + dateStr.getSeconds()
  );

  return str;
};

// /**
//  * 显示日期为多久之前
//  * @param date 日期对象或者时间戳, safari and wechat bug !
//  */
// export function timeago(date: Date | number) {
//   const timestamp = new Date(date).getTime();
//   const mistiming = Math.round((Date.now() - timestamp) / 1000);
//   const arrr = ["年", "个月", "星期", "天", "小时", "分钟", "秒"];
//   const arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];
//   for (let i = 0; i < arrn.length; i++) {
//     const inm = Math.floor(mistiming / arrn[i]);
//     if (inm != 0) {
//       if (i === 0 && inm >= 50) return formatTime(timestamp);
//       return inm + arrr[i] + "前";
//     } else {
//       if (i === arrn.length - 1) return "刚刚";
//     }
//   }
// }

/**
 * 获取多长时间之前的时间对象，年为365算，月为30算
 * @param num 数量
 * @param type 类型：只能为 YYYY | MM | DD | hh | mm | ss
 */
export function getDateofBrfore(
  num: number,
  type: string
): { date: Date; str: string } {
  const types = {
    YYYY: 1000 * 60 * 60 * 24 * 365 * num,
    MM: 1000 * 60 * 60 * 24 * 30 * num,
    DD: 1000 * 60 * 60 * 24 * num,
    hh: 1000 * 60 * 60 * num,
    mm: 1000 * 60 * num,
    ss: 1000 * num,
  };
  const before = new Date(Date.now() - types[type]);
  return { date: before, str: formatTime(before) };
}
