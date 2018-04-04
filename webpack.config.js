const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = (evn = {}) => {
    evn.Generative = evn.Generative == "true"
    console.log(`------------------- ${evn.Generative ? '生产' : '开发'}环境 -------------------`);
    let plugins = [
        // 把生成的文件插入到 启动页中
        new HtmlWebpackPlugin({ template: './src/index.html' }),

    ];
    // 生产环境
    if (evn.Generative) {
        plugins = [
            // 清理目录
            new CleanWebpackPlugin(['build']),
            ...plugins
        ]
    }
    let webConfig = {
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
                    test: /\.vue$/, loader: 'vue-loader',
                    include: path.resolve(__dirname),
                    options: {
                        loaders: {
                            ts: 'ts-loader',
                            tsx: 'babel-loader!ts-loader',
                        }
                    }
                },
                { test: /\.ts$/, include: path.resolve(__dirname), loader: 'ts-loader' },
                { test: /\.tsx$/, include: path.resolve(__dirname), loader: 'babel-loader!ts-loader' },
                {
                    test: /\.html$/,
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                },
            ]
        },
    };
    return [{
        ...webConfig,
        entry: {
            'app': './src/index.ts' //应用程序
        },
        output: {
            path: path.resolve(__dirname, "build"),
            publicPath: evn.Generative ? './' : '/',
            // publicPath: '/',
            filename: 'js/[name].js',
            chunkFilename: 'js/[name].js'
        },
        // 启动 dev-server 的服务配置
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
        plugins: plugins,

    }
    ]
}