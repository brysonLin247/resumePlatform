const path = require('path');
const baseConfig = require('./webpack.base.js');
const webpackMerge = require('webpack-merge');

const mainConfig = {
  entry: path.resolve(__dirname,'../app/main/electron.ts'),
  target: 'electron-main',
  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname,'../dist'),
  },
  devtool:'inline-source-map',
  mode:'development'
}

module.exports = webpackMerge.merge(baseConfig, mainConfig);

// 定义入口为/app/main/electron.js，并且定义打包出来的文件目录为dist，文件名为electron.js