const path = require('path');
const webpack = require('webpack')
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require('webpack-pwa-manifest')
module.exports = {
    entry:  "./src/index.js",
    output:{
        path:path.join(__dirname,"/dist"),
        filename:"bundle.js",
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader","sass-loader"]
            },
            {
                test: /\.(jpg|jpeg|gif|png|ico)$/,
                exclude: /node_modules/,
                loader:'file-loader?name=img/[path][name].[ext]&context=./app/images'
             },
             {
                 test:/\.html$/,
                 use:["html-loader"]
             }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Better Habits',
            template:'./public/index.html',
            favicon:'./public/favicon.ico'
        }),
        new WebpackPwaManifest({
            name: 'Better Habits',
            short_name: 'BetterHabits',
            description: 'Better Habits and mindfullness.',
            background_color: '#A3255E',
            icons: [
            {
                src: path.resolve('public/assets/favicons/android-chrome-256x256.png'),
                sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
            }
            ]
        }),
        new webpack.ProvidePlugin({
            axios: "axios"
        }),
        new WorkboxPlugin.GenerateSW({
            swDest: 'sw.js',
            clientsClaim: true,
            skipWaiting: true,
        })
    ],
    resolve: {
        extensions: ["*",".js", ".jsx"]
    },
    devServer: {
        port: 3000,
        open:true,
        proxy:{"/api":"http://localhost:3001"},
        historyApiFallback: true
    },
    optimization: {
        splitChunks: {
            chunks:'initial'
          },
        runtimeChunk: {
          name: "manifest"
        }
      }
};