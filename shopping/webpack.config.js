/**
 * Created by bingoogolapple on 16/8/21.
 */

var path = require('path');
var webpack = require('webpack');

var args = require('node-args');  // 通过读取参数的方式

var env = process.env.NODE_ENV;   // 通过读取环境变量的方式

var config = {
    entry: {
        admin: './admin/index.js',
        consumer: './consumer/index.js'
    },
    resolve: {
        modulesDirectories: ["web_modules", "node_modules", "bower_components"]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        )
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',  // 如果要用到webpack的devserver的话,需要配置publicPath,标明要从哪个url去获取打包后的文件
        filename: '[name].bundle.js'  // name这个参数会读取entry里对应的key
    },
    devtool: 'source-map',
    module: {
        noParse: [/jquery/, /silly-datetime/],  // 对于每一个webpack处理的文件,都会去编译里面所有的import或require,然后再去通过里面的字符串来寻找对应的文件,这个过程比较耗时。由于已经确定了jquery里没有import或require,所以将其排除
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
            exclude: /(node_modules|bower_components)/,
            include: /(admin|consumer)/,
            loader: 'react-hot!babel'
        }, {
            test: /\.(woff|svg|ttf|eot)([\?]?.*)$/,
            loader: "file-loader?name=[name].[ext]"
        }]
    }
};

if (args.minify || env === 'production') {
    config.plugins = [
        new webpack.optimize.UglifyJsPlugin({ // 压缩js
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),  // 优化打包后的module方法数字参数
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        )
    ];
}

module.exports = config;

/*
 npm install webpack --save-dev
 npm install webpack-dev-server --save-dev
 webpack --progress --colors --minify // 打包,--minify参数是随便定义的,配合node-args来动态配置是否压缩js文件
 webpack-dev-server --progress --colors --hot --inline -d // 开启测试服务  -d参数表示生成source-map,效果与配置devtool: 'source-map'一样
 在package.json的scripts里添加 "start": "webpack-dev-server --progress --colors --hot --inline -d"   // npm run start
 在package.json的scripts里添加 "build": "webpack --progress --colors --minify" // npm run build
 可以通过在命令的前面指定NODE_ENV=production来模拟指定环境变量 "build": "NODE_ENV=production webpack --progress --colors"



 npm install css-loader style-loader --save-dev  // css-loader 读取css文件和处理css文件里的一些url，比如可以改css里image的相对路径或绝对路径,style-loader 把css-loader读取的css文件内容用js写到页面的style标签里

 npm install file-loader --save-dev  // 打包图片文件

 npm install url-loader --save-dev  // 打包时将图片base64编码,减少http请求

 npm install node-sass --save-dev
 npm install sass-loader --save-dev

 npm install babel-loader babel-core babel-preset-es2015 --save-dev  // es2015相关

 npm install babel-preset-react react-hot-loader --save-dev   // react相关
 npm install react react-dom --save

 npm install silly-datetime jquery --save    // demo里用到的

 npm install node-args --save-dev  // 用于读取运行时传入的参数

 npm install -g bower
 bower init
 bower install semantic --save
 */