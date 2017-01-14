'use strict';
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './js/react/index.jsx',
  output: {
    path: __dirname,
    filename: './js/bundle.js'
  },
  watch: true,
  module: {
   loaders: [
     {
       test: /\.jsx/,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015']
       }
     }
   ]
 },
 resolve: {
   extensions: ['', '.js', '.jsx', '.es6']
 }
}
