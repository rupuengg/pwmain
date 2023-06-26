/* eslint-disable import/no-unresolved */
const { merge } = require('webpack-merge');
const webpackConfig = require('./config');
const path = require('path');

module.exports = merge(webpackConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
});
