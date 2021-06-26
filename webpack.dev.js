const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    devtool: 'source-map',
    devServer: {
        port: 5040
    },
    module: {
        rules: [
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                
            }
        }
    ]
    },
    plugins: [new HtmlWebPackPlugin({
        template: "./src/client/html/views/index.html", 
        filename: "./index.html"
    })],
};