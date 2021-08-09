const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  test: /\.module\.less$/i,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 2,
        modules: {
          localIdentName: '[hash:base64:5]___[name]__[local]',
        },
      },
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
  sideEffects: false,
  exclude: /(?<!module)\.less/g,
};
