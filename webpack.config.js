const path = require('path');
const webpack = require('webpack')
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
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader","sass-loader"]
            }
        ]
    },
    plugins: [htmlWebpackPlugin,
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')

        }),
        new webpack.ProvidePlugin({
            axios: "axios"
        })],        
    resolve: {
        extensions: ["*",".js", ".jsx"]
    },
    devServer: {
        port: 3000,
        open:true,
        proxy:{"/api":"http://localhost:3001"},
        historyApiFallback: true
    }
};