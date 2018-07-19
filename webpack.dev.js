// entry -> output
const path = require('path');
const merge = require('webpack-merge');
const commom = require('./webpack.common.js');

module.exports = merge(commom, {
  // mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    port: process.env.PORT || 8080
  }
});
