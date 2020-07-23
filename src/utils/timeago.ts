/*
 * @Date: 2020-07-22 13:54:38
 * @LastEditors: xujianxing
 * @LastEditTime: 2020-07-23 15:14:29
 * @FilePath: \hattool\src\utils\timeago.ts
 */

import { isNull, isUnd, isDate, isNum } from "../common";

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
