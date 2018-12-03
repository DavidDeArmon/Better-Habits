const path = require('path');
const webpack = require('webpack')
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "./public/index.html"),
    filename: "./index.html"
});
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
            }
        ]
    },
    plugins: [htmlWebpackPlugin,
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