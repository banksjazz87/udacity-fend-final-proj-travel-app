const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: './src/client/index.js',
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
    }
}