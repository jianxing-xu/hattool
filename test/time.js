/*
 * @Date: 2020-08-11 12:32:30
 * @LastEditors: xujianxing
 * @LastEditTime: 2020-08-11 12:43:46
 * @FilePath: \hattool\test\time.js
 */
/**
 *
 * @param num 数量
 * @param type 类型：只能为YYYY|MM|DD|hh|mm|ss
 */
function getDateofBrfore(num, type) {
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
const formatTime = (val = +new Date(), dateType = "YYYY-MM-DD hh:mm:ss") => {
  // 将字符串转换成数字
  const timeStamp = +new Date(val);

  // 如果转换成数字出错
  if (!timeStamp) {
    return val;
  }
  let str;
  // 得到时间字符串
  const dateStr = new Date(timeStamp);
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

const { date, str } = getDateofBrfore(12, "hh");
console.log(date.getDate());
console.log(formatTime(Date.now() - 10000));
