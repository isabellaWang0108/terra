const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const filter = require('lodash/filter')

const lessLoader = {
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

const lessModuleLoader = {
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

const configureRules = config => {
  config.module.rules.push(lessLoader)
  config.module.rules.push(lessModuleLoader)

  const getCssRules = rules => filter(rules, rule => String(rule.test).match(/[^s]css/))
  const defaultCssRules = getCssRules(config.module.rules)

  defaultCssRules.forEach(rule => {
    config.module.rules.splice(config.module.rules.indexOf(rule), 1)
  })
}

const configurePlugins = config => {
  config.plugins.push(new MiniCssExtractPlugin())
}

module.exports = async ({ config }) => {
  configureRules(config)
  configurePlugins(config)

  return config
}
