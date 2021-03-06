var path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: 'www',
    filename: 'bundle.js'

  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {test: /\.html$/, loader: 'raw'},

      {
        test: /\.js$/,
        exclude: /node_modules/, loader: "babel-loader"
      },
      { test: /\.jpg$/, loader: "file-loader" }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './templates/index.html'
    })
  ]
};