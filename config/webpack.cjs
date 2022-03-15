'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const defaultBabelRule = require('@dimensionalpocket/development-webpack/rules/babel')
const defaultStyleRule = require('@dimensionalpocket/development-webpack/rules/style')
const defaultPlugins = require('@dimensionalpocket/development-webpack/plugins')

const root = path.resolve(__dirname, '..')

module.exports = {
  mode: 'development',
  entry: path.resolve(root, 'src', 'three', 'previewer.js'),
  output: {
    path: path.resolve(root, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [defaultBabelRule, defaultStyleRule]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(root, 'src', 'three', 'previewer.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    hot: true
  }
}
