/**
 * Created by bingoogolapple on 16/8/21.
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        admin: './admin/index.js',
        consumer: './consumer/index.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ // 压缩
            compress: {
                warnings: false
            }
        })
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',  // 如果要用到webpack的devserver的话,需要配置publicPath,标明要从哪个url去获取打包后的文件
        filename: '[name].bundle.js'  // name这个参数会读取entry里对应的key
    },
    devtool: 'source-map',
    module: {
        noParse: [/jquery/],  // 对于每一个webpack处理的文件,都会去编译里面所有的import或require,然后再去通过里面的字符串来寻找对应的文件,这个过程比较耗时。由于已经确定了jquery里没有import或require,所以将其排除
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'  // 从右到左执行，先执行css-loader，再执行style-loader
        }, {
            test: /images/,
            loader: 'file'
        }, {
            test: /icons/,
            loader: 'url'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            include: /(admin|consumer)/,
            loader: 'babel'
        }]
    }
};

/*
 npm install webpack --save-dev
 npm install webpack-dev-server --save-dev
 webpack --process --colors // 打包
 在package.json里添加 "start": "webpack-dev-server --process --colors --hot --inline"

 插件列表地址 https://webpack.github.io/docs/list-of-plugins.html


 npm install css-loader style-loader --save-dev  // css-loader 读取css文件和处理css文件里的一些url，比如可以改css里image的相对路径或绝对路径,style-loader 把css-loader读取的css文件内容用js写到页面的style标签里

 npm install file-loader --save-dev  // 打包图片文件

 npm install url-loader --save-dev  // 打包时将图片base64编码,减少http请求

 npm install node-sass --save-dev
 npm install sass-loader --save-dev

 npm install babel-loader babel-core babel-preset-es2015 --save-dev
 */