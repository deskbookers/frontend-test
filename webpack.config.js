'use strict';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'eval',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src'),
        }, {
            test: /\.sass$/,
            loaders: ['style', 'css?sourceMap', 'postcss?sourceMap', 'sass?sourceMap'],
        }],
    },
    postcss() {
        return [autoprefixer({ browsers: ['last 4 versions'] })];
    },
    sassLoader: {
        includePaths: [
            path.join(__dirname, 'src/styles'),
        ],
    },
};
