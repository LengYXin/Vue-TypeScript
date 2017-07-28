// var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ngtools = require('@ngtools/webpack');
//官网的指导地址 https://angular.io/guide/webpack#plugins
module.exports = (__dirname, path) => {
    return {
        entry: {
            'polyfills': './src/polyfills.ts', //低版本浏览器扩展
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
                    // loaders: [{
                    //         loader: 'awesome-typescript-loader',
                    //     },
                    //     'angular2-template-loader' //ng的模板插件
                    // ]
                    loader: '@ngtools/webpack',
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader',
                },
                {
                    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                    loader: 'file-loader?name=assets/[name].[hash].[ext]'
                },
                {
                    test: /\.css$/,
                    exclude: path.resolve(__dirname, "src", "app"), //排除 app目录
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: "css-loader?sourceMap=true"
                    })
                },
                {
                    test: /\.css$/, //处理 @Component  中的 styleUrls
                    include: path.resolve(__dirname, "src", "app"), //只包含 app目录
                    loader: 'raw-loader'
                }
            ]
        },

        plugins: [
            // Workaround for angular/angular#11580
            new webpack.ContextReplacementPlugin(
                // The (\\|\/) piece accounts for path separators in *nix and Windows
                /angular(\\|\/)core(\\|\/)@angular/,
                //   helpers.root('./src'), // location of your src
                path.resolve(__dirname, "src"), {} // a map of your routes
            ),
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
    };

}