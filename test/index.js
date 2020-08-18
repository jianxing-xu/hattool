/*
 * @Date: 2020-07-23 10:19:46
 * @LastEditors: xujianxing
 * @LastEditTime: 2020-08-18 15:45:00
 * @FilePath: \hattool\test\index.js
 */



 
 



// const { Time, Browser } = require("../lib/utils/").Browser;
// console.log(Time.timeago(Date.now() - 10000));

// const formatTime = (val = +new Date(), dateType = "YYYY-MM-DD hh:mm:ss") => {
//   // 将字符串转换成数字
//   const timeStamp = +new Date(val);

//   // 如果转换成数字出错
//   if (!timeStamp) {
//     return val;
//   }
//   let str;
//   // 得到时间字符串
//   const dateStr = new Date(timeStamp);
//   str = dateType.replace("YYYY", dateStr.getFullYear());
//   str = str.replace(
//     "MM",
//     (dateStr.getMonth() + 1 < 10 ? "0" : "") + (dateStr.getMonth() + 1)
//   );
//   str = str.replace(
//     "DD",
//     (dateStr.getDate() < 10 ? "0" : "") + dateStr.getDate()
//   );
//   str = str.replace(
//     "hh",
//     (dateStr.getHours() < 10 ? "0" : "") + dateStr.getHours()
//   );
//   str = str.replace(
//     "mm",
//     (dateStr.getMinutes() < 10 ? "0" : "") + dateStr.getMinutes()
//   );
//   str = str.replace(
//     "ss",
//     (dateStr.getSeconds() < 10 ? "0" : "") + dateStr.getSeconds()
//   );

//   return str;
// };

// function timeFormat(date) {
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

// console.log(Hat.time.timeago(Date.now() - 200000));

// const nest = (
//   items,
//   idKey = "id",
//   pidKey = "pid",
//   childrenKey = "children",
//   pid = null
// ) =>
//   items
//     .filter((item) => item[pidKey] === pid)
//     .map((item) => ({
//       ...item,
//       children: nest(items, idKey, pidKey, childrenKey, item[idKey]),
//     }));
// const arr = [
//   { id: 1, pid: 0, name: "xu" },
//   { id: 2, pid: 1, name: "cheng" },
//   { id: 3, pid: 1, name: "awng" },
//   { id: 4, pid: 3, name: "lisi" },
// ];

// console.log(nest(arr, "id", (pidKey = "pid"), "children", 0));

// function shuffle(arr) {
//   let len = arr.length;
//   while (len) {
//     len -= 1;
//     const r1 = Math.floor(Math.random() * len);
//     [arr[len], arr[r1]] = [arr[r1], arr[len]];
//   }
//   return arr;
// }
// const arr = [1, 2, 3, 4, 5, 6, 7];
// setInterval(() => {
//   console.log(shuffle(arr));
// }, 700);

// var time = require("../src/utils/time");
// const { formatTime, getDateofBrfore } = time;

// console.log(formatTime(Date.now() - 10000));
// console.log(getDateofBrfore(10, "DD"));
