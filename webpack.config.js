const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const lessModuleLoader = require('./webpack/loaders/less.module')

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      lessModuleLoader
    ]
  }
}
