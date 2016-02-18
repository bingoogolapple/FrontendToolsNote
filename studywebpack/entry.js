'use strict';

// var name = require('./name');
//
// // 添加webpack.config.js配置文件后就不用在这里面设置加载器
// // require('style!css!./style.css');
//
// require('./style.css');



// import name from './name';
// import './style.css';
//
// document.getElementById('app').textContent = 'hello ' + name;
//
// let input = document.createElement('input');
// document.getElementById('app').appendChild(input);

// webpack-dev-server --inline --hot


import React from "react";
import ReactDOM from "react-dom";
import Name from "./name";

ReactDOM.render(
  <Name />,
  document.getElementById('app')
);

// 在package.json中添加scripts后命令行执行 npm run watch
