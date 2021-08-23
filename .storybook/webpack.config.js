const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const filter = require('lodash/filter')

const lessLoader = {
  test: /\.less$/,
  use: ['style-loader', 'css-loader', 'less-loader'],
  exclude: /\.module\.less$/,
}

const cssLoader = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}

const lessModuleLoader = {
  test: /\.module\.less$/i,
  use: [
    'style-loader',
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
    'less-loader',
  ],
  sideEffects: false,
  exclude: /(?<!module)\.less/g,
}

const configureRules = config => {
  config.module.rules.push(lessLoader)
  config.module.rules.push(lessModuleLoader)

  const getCssRules = rules => filter(rules, rule => String(rule.test).match(/[^s]css/))
  const defaultCssRules = getCssRules(config.module.rules)

  defaultCssRules.forEach(rule => {
    config.module.rules.splice(config.module.rules.indexOf(rule), 1)
  })

  config.module.rules.push(cssLoader)
}

const configureAlias = config => {
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    '@sb-config': __dirname,
  }
}

module.exports = async ({ config }) => {
  configureAlias(config)
  configureRules(config)

  return config
}
