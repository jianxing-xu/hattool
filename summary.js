/*
 * @Date: 2020-08-10 16:01:21
 * @LastEditors: xujianxing
 * @LastEditTime: 2020-08-10 16:21:05
 * @FilePath: \hattool\summary.js
 */
var fs = require("fs");
var path = require("path");

var pathName = "./src/utils";

fs.readdir(pathName, function (err, files) {
  var dirs = ["./src/common.ts"];
  (function iterator(i) {
    if (i == files.length) {
      for (var j = 0; j < dirs.length; j++) {
        console.log(dirs[j]);
        fs.readFile(dirs[j], function (err, data) {
          fs.writeFile("./index.ts", data, { flag: "a" }, function (err) {
            if (err) {
              console.log("写入出错！");
              return;
            }
            console.log("写入成功！");
          });
        });
      }
      return;
    }
    fs.stat(path.join(pathName, files[i]), function (err, data) {
      if (data.isFile()) {
        dirs.push("./src/utils/" + files[i]);
      }
      iterator(i + 1);
    });
  })(0);
});
