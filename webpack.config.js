const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
// 公共css模块
const commonCss = new ExtractTextPlugin({
    filename: 'css/common.css',
    allChunks: true
});
// 项目css模块
const styleCss = new ExtractTextPlugin({
    filename: 'css/style.css',
    allChunks: true
});
const srcPath = path.resolve(__dirname, "src");
module.exports = (evn = {}) => {
    evn.Generative = evn.Generative == "true"
    console.log(`-------------------------------------- ${evn.Generative ? '生产' : '开发'} --------------------------------------`);
    let plugins = [
        // 把生成的文件插入到 启动页中
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new CopyWebpackPlugin([{
            from: 'src/assets',
            to: 'assets'
        }]),
        commonCss,
        styleCss
    ];
    // 生产环境
    if (evn.Generative) {
        plugins = [
            // 清理目录
            new CleanWebpackPlugin(['build']),
            ...plugins
        ]
    }
    const cssOptions = {
        fallback: "style-loader",
        // 生产环境 不生成map 且压缩css
        use:evn.Generative?`css-loader?minimize=true`: `css-loader?sourceMap=true`
    };
    const Config = {
        resolve: {
            extensions: [".ts", ".tsx", ".js", '.vue', ".json"],
            // https://github.com/vuejs-templates/webpack/issues/215
            alias: {
                'vue$': 'vue/dist/vue.common.js',
            }
        },
        module: {
            rules: [
                {
                    // vue 配置文档 https://vue-loader.vuejs.org/zh-cn/configurations/pre-processors.html
                    test: /\.vue$/, loader: 'vue-loader',
                    include: srcPath,
                    options: {
                        loaders: {
                            ts: 'ts-loader',
                            tsx: 'babel-loader!ts-loader',
                            css: styleCss.extract({
                                use: cssOptions.use,
                                fallback: 'vue-style-loader'
                            })
                        }
                    }
                },
                { test: /\.ts$/, include: srcPath, loader: 'ts-loader' },
                // vue jsx   https://github.com/vuejs/babel-plugin-transform-vue-jsx
                // 编译顺序  tsx>es6>babel,vue-jsx>js 
                { test: /\.tsx$/, include: srcPath, loader: 'babel-loader!ts-loader' },
                {
                    test: /\.html$/,
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                },
                {
                    test: /\.css$/,
                    include: srcPath,
                    use: styleCss.extract(cssOptions)
                },
                {
                    test: /\.css$/,
                    exclude: srcPath,
                    use: commonCss.extract(cssOptions)
                },
                {
                    test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                    loader: 'url-loader?limit=50000&name=[path][name].[ext]'
                },
            ]
        },
    };
    return [{
        ...Config,
        entry: {
            'app': './src/index.ts' //应用程序
        },
        output: {
            path: path.resolve(__dirname, "build"),
            publicPath: evn.Generative ? './' : '/',
            filename: 'js/[name].js',
            chunkFilename: 'js/[name].js'
        },
        devServer: {
            inline: true, //热更新
            port: "3002",
            proxy: {
                '/api': {
                    target: 'http://localhost:4001',
                    pathRewrite: {
                        "^/api": ""
                    },
                    secure: false
                },
            },
            //404 页面返回 index.html 
            historyApiFallback: true,
        },
        // 打包模式 development。启用NamedModulesPlugin。 production。启用UglifyJsPlugin，ModuleConcatenationPlugin和NoEmitOnErrorsPlugin。
        mode: evn.Generative ? 'production' : 'development',
        // 开发环境 生成 map 文件  
        devtool: evn.Generative ? false : 'source-map',
        // webpack 4删除了CommonsChunkPlugin，以支持两个新选项（optimization.splitChunks和optimization.runtimeChunk）
        // https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
        optimization: {
            splitChunks: {
                // chunks: "all",
                // name: true,
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        chunks: "all"
                    }
                }
            }
        },
        plugins,

    }
    ]
}