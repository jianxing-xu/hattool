/*
 * @Date: 2020-07-23 09:36:47
 * @LastEditors: xujianxing
 * @LastEditTime: 2020-08-10 16:41:23
 * @FilePath: \hattool\src\index.ts
 */

import {
  getType,
  isArr,
  isBol,
  isDate,
  isFun,
  isNull,
  isNum,
  isObj,
  isStr,
  isUnd,
} from "./common";
import * as Arr from "./utils/arr";
import * as Browser from "./utils/browser";
import * as Time from "./utils/time";
import * as Other from "./utils/other";
import * as Device from "./utils/device";

export {
  getType,
  isArr,
  isBol,
  isDate,
  isFun,
  isNull,
  isNum,
  isObj,
  isStr,
  isUnd,
  Arr,
  Browser,
  Time,
  Other,
  Device,
};
