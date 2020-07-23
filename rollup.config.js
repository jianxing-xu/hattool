/*
 * @Date: 2020-07-23 09:37:11
 * @LastEditors: xujianxing
 * @LastEditTime: 2020-07-23 16:06:00
 * @FilePath: \hattool\rollup.config.js
 */
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript";
// import { uglify } from "rollup-plugin-uglify";
export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/hattool.js",
      format: "umd",
      name: "Hat", // umd/iife 必须指定 name
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    // 只编译我的代码
    babel({
      exclude: "node_modules/**",
    }),
  ],
};
