/*
 * @Date: 2020-08-10 13:39:42
 * @LastEditors: xujianxing
 * @LastEditTime: 2020-08-18 15:28:52
 * @FilePath: \hattool\src\arr.ts
 */

/**
 * 对象数组去重
 * @param data 去重的对象数组
 * @param key 去重的键
 */
function deduplication(data: Array<any>, key: string) {
  if (!Array.isArray(data)) {
    console.log("请传入数组");
    return;
  }
  const arr = [];
  const obj = {};
  data.forEach((item, index) => {
    const attr = key ? item[key] : item;
    if (!obj[attr]) {
      obj[attr] = index + 1;
      arr.push(item);
    }
  });
  return arr;
}

/**
 * 将 id pid 转化为树形结构
 * @param items 处理的数组
 * @param idKey 默认id的键，默认为 'id'
 * @param pidKey 默认pid的键，默认为 'pid'
 * @param childrenKey 默认子节点的键，默认为 'children'
 * @param pid
 */
const toTree = (
  items: Array<Object>,
  idKey: string = "id",
  pidKey: string = "pid",
  childrenKey: string = "children",
  pid: any = null
) =>
  items
    .filter((item) => item[pidKey] === pid)
    .map((item) => ({
      ...item,
      [childrenKey]: toTree(items, idKey, pidKey, childrenKey, item[idKey]),
    }));

/**
 * 洗牌函数
 * @param arr 需要洗牌的数组
 */
const shuffle = (arr: Array<any>) => {
  let len = arr.length;
  while (len) {
    len -= 1;
    const r1 = Math.floor(Math.random() * len);
    [arr[len], arr[r1]] = [arr[r1], arr[len]];
  }
  return arr;
};

/**
 * 将一个一维数组，按指定个数分割为二维数组
 * @param arr 处理的数组
 * @param len 目标每个数组的长度
 */
const splitToArr = (arr: Array<any>, len: number) => {
  const ret = [];
  // 得到需要二位数组的长度
  const count = Math.ceil(arr.length / len);
  for (let i = 0; i < count; i++) {
    // 采用 数组方法 slice 分割
    ret.push(arr.slice(i * len, i * len + len));
  }
  return ret;
};

export default {
  deduplication,
  toTree,
  shuffle,
  splitToArr,
};
