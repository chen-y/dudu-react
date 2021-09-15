const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    hot: true,
    port: 9997,
    open: true,
    historyApiFallback: true,
  }
})