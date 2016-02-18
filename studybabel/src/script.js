'use strict';

let breakfast = (dessert, drink) => dessert + drink;


let fruits = ['苹果', '梨子'],
    foods = [...fruits, '蛋糕'];

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
    "babel-cli": "^6.5.1",
    "babel-cli": "^6.5.1",
    "babel-preset-es2015": "^6.5.0",
    "babel-preset-react": "^6.5.0",
    "gulp": "^3.9.1",
    "gulp-babel": "^6.1.2"
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
