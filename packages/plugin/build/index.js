const babel = require("@babel/core");
const path = require("path");

const file = path.resolve(__dirname, "./../src/index.js");

const obj = babel.transformFileSync(file, {
  babelrc: true,
});

console.log(obj.code);
