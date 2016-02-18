'use strict';

var breakfast = function breakfast(dessert, drink) {
  return dessert + drink;
};

var fruits = ['苹果', '梨子'],
    foods = [].concat(fruits, ['蛋糕']);

console.log(foods);

/*
npm install babel-cli --save-dev
./node_modules/.bin/babel --help
./node_modules/.bin/babel script.js
./node_modules/.bin/babel script.js --out-file script-compiled.js
./node_modules/.bin/babel src --watch --out-dir lib
*/

/*
在package.json的scripts里面添加babel命令

{
  "name": "studybabel",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src --watch --out-dir lib"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.5.1"
  }
}

npm run build
*/

// npm install babel-preset-es2015 --save-dev
// npm install babel-preset-react --save-dev
/*
.babelrc 是babel的配置文件，指定想要使用的预设

{
  "presets": ["es2015", "react"]
}
*/

/*
npm install gulp gulp-babel --save-dev
*/