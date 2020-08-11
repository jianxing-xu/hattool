/*
 * @Date: 2020-08-10 13:39:42
 * @LastEditors: xujianxing
 * @LastEditTime: 2020-08-11 11:29:55
 * @FilePath: \hattool\src\utils\arr.ts
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

export default {
  deduplication,
  toTree,
  shuffle,
};
