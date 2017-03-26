#!/usr/bin/env bash

npm install --save react react-dom
npm install --save-dev webpack webpack-dev-server
npm install --save-dev babel-loader babel-core babel-preset-react babel-preset-es2015

#run hot webpack
# ./node_modules/.bin/webpack-dev-server --progress --colors --hot --config webpack.config.js