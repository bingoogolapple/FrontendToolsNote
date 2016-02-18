'use strict';

import { booth } from './fruit';

booth();

// let fruits = ['苹果', '梨子'],
//     foods = [...fruits, '蛋糕'];
//
// document.body.innerText = foods.toString();
//
// console.log(foods);

export default {};

/*
npm install jspm -g
npm init
npm install jspm --save-dev
jspm init

jspm install jquery=github:components/jquery
jspm uninstall jquery

可根据这个网址简写 https://github.com/jspm/registry/blob/master/registry.json
jspm install jquery

jspm bundle app/main app/build.js

加上--inject后会在config.js中添加bundles信息，这样就不用在html中添加<script src="app/build.js"></script>
jspm bundle app/main app/build.js --inject
*/
