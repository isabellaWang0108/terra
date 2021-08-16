const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const terraConfig = require('../webpack.config')
const lessModuleLoader = require('../webpack/loaders/less.module')
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
  config.plugins = config.plugins.concat(terraConfig.plugins)
}

module.exports = async ({ config }) => {
  configureRules(config)
  configurePlugins(config)

  return config
}
