const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
//const extractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    mode: 'production',  //development
    entry: {
        "app.bundle":"./src/app.js"
    },//'./src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        //filename: 'app.bundle.js'
        filename: "[name].[hash].js"
        //随着每次编译name对应entry的app.bundle，hash对应每一次的hash 保证文件永远最新不缓存 webpack -p
        //但是只有最新有用 删除以前的
    },
    devServer:{
        port:8000,  //更改webpack-dev-sever的默认端口号
        open: true, //自动打开浏览器并访问上面端口
        hot:true  //开启热更新  再开启两个对应webpack插件
    },
    plugins: [  //放插件
        new htmlWebpackPlugin({
            title:"AugustOctopus",
            filename:"demo.html",  //默认index
            template:'./src/a.html'
            /*minify: {
                collapseWhitespace:true   //是否压缩
            }*/
        }),/*,
        new extractTextPlugin('style.css')*/
        new CleanWebpackPlugin(["dist"]),  //清除哪一个路径下的文件
        new webpack.HotMoudleReplacementPlugin(),//热更新添加
        new webpack.NamedMoudlesPlugin()//变更模块名打印
    ],
    module: {   //放模块
        rules: [
            { test: /\.css$/, use: ['style-loader','css-loader'] },  //先执行后边,写到入口文件内，若要分离还需分离插件
            //{ test:/\.(png|jpg|gif)$/,use:['file-loader']}  //这里url会变成hash值
            { test:/\.(png|jpg|gif)$/,use:[{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',  //[path]原资源路径名可删
                        context: '',
                        outputPath:'images/'
                    }
                }]
            },//这样就保留原名啦 还能放到指定路径  file-loader这种只能背景图片
            {
                test: /\.(html)$/,
                use: [{
                    loader:'html-loader',
                    options:{
                    title:"AugustOctopus"
                   }
                }]
            }
            /*{
                test: /\.js$/,
                exclude: /node_modules/,
                use:['babel-loader']
                    //loader: 'babel-loader'
                    /!*options: {
                        presets: ['env']
                    }*!/
            }*/
        ]
        /*rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]*/
    }
};