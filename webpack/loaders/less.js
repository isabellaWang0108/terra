const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  test: /\.less$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
    },
    {
      loader: 'less-loader',
      options: {
        lessOptions: {
          modifyVars: {},
          javascriptEnabled: true,
        },
      },
    },
  ],
  exclude: /\.module\.less$/,
}
