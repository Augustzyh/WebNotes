const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    plugins: [  //放插件
        new htmlWebpackPlugin({
            title:"AugustOctopus",
            filename:"demo.html",  //默认index
            template:'./src/a.html'
        })
    ],
    module: {   //放模块
        rules: [
            { test: /\.css$/, use: ['style-loader','css-loader'] }  //先执行后边,写到入口文件内，若要分离还需分离插件
        ]
    }
};