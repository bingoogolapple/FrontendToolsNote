'use strict';

var fruits = ['苹果', '梨子'],
    foods = [].concat(fruits, ['蛋糕']);

document.body.innerText = foods.toString();
console.log(foods);