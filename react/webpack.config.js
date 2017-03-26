/**
 * Created by ZE on 2017/03/21.
 */
// webpack.config.js
var path = require('path');
var webpack = require('webpack');

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
