// webpack/webpack.main.prod.js
const path = require('path');
const baseConfig = require('./webpack.base.js');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

const prodConfig = {
  entry: path.resolve(__dirname, '../app/main/electron.ts'),
  target: 'electron-main',
  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  // π θΏιζΉζηδΊ§η―ε’
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      __dirname:'__dirname'
    })
  ]
};

module.exports = webpackMerge.merge(baseConfig, prodConfig);