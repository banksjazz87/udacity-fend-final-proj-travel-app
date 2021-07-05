const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        library: {
            name: 'MyLib',
            type: 'var'
        }
    },
    /*optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})]
    },*/
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }]
    },
    plugins: [new HtmlWebPackPlugin({
            template: "./src/client/html/views/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({ filename: '[name].css' })
    ],
};