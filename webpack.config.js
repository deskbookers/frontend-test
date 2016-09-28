'use strict';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const argv = require('yargs').argv;

const config = {
    devtool: 'eval',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index',
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static',
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
        }, {
            test: /\.(jpe?g|png)$/,
            loader: 'url',
        }, {
            test: /\.svg$/,
            loader: 'svg-sprite?' + JSON.stringify({
                name: '[name]',
                prefixize: true,
            }),
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


if (argv.production) {
    config.entry = './src/index';
    config.plugins = [
        new webpack.optimize.UglifyJsPlugin({ minimize: true }),
        new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': '"production"' } }),
    ];
}

module.exports = config;
