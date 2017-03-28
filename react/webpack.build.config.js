/**
 * Created by ZE on 2017/03/21.
 */
// webpack.config.js
var path = require('path');
var webpack = require('webpack');
var fs = require('fs-extra');
fs.copy(
    path.join(__dirname, 'index.build.html'),
    path.join(__dirname, 'index.html'),
    err => {
        if (err)
            return console.log(err)
    });
module.exports = {
    entry: './react/index.js',
    output: {path: path.join(__dirname, 'dist'), filename: 'react_index.js'},
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
