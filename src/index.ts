/*
 * @Date: 2020-07-23 09:36:47
 * @LastEditors: xujianxing
 * @LastEditTime: 2020-08-18 15:20:01
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
import * as Arr from "./arr";
import * as Browser from "./browser";
import * as Time from "./time";
import * as Other from "./other";
import * as Device from "./device";

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
