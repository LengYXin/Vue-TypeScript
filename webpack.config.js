var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        'vendor': './src/vendor.ts', //第三方依赖
        'app': './src/app.ts' //应用程序
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    devServer: {
        inline: true,
        port: "8088",
        proxy: {

        }
    },
    devtool: 'source-map', //source-map
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            // {
            //     test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            //     loader: 'file-loader?name=assets/[name].[hash].[ext]'
            // },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader?sourceMap=true"
                })
            },
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".html"],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
        }
    },
    plugins: [
        new CopyWebpackPlugin([{
                from: 'src/assets',
                to: 'assets'
            }
        ]),
        // 注明共享 层次关系 app- > vendor- > polyfills
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),
        // 把生成的文件插入到 启动页中
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        //生成对应的css文件
        new ExtractTextPlugin('styles.css'),
        //发布的时候 压缩使用
        // new webpack.optimize.UglifyJsPlugin({ 
        //     mangle: {
        //         keep_fnames: true
        //     }
        // }),

    ]
}