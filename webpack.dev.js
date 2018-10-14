// entry -> output
const path = require('path');
const merge = require('webpack-merge');
const commom = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(commom, {
  // mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new Dotenv()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    port: process.env.PORT || 8080
  }
});
