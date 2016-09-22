var path = require('path');
var webpack = require('webpack');

var babelReactLoader = {
  test: /\.jsx?$/,
  loader: 'babel-loader',
  exclude: /(node_modules|dist)/,
  query: {
    presets: [ 'es2015', 'react' ]
  }
};

var lessLoader = {
  test: /\.less$/,
  loader: 'style!css!less'
};

var urlLoader = {
  test: /\.(jpe?g|png)$/,
  loader: 'url'
};

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    root: path.resolve(__dirname, 'src'),
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [ babelReactLoader, lessLoader, urlLoader ]
  },
  recordsPath: path.resolve(__dirname, 'records.json'),
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, 'dist')
  }
};