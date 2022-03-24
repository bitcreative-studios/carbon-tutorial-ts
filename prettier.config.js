const carbonConfig = require('prettier-config-carbon')

const personalConfig = {
  arrowParens: 'avoid',
  semi: false,
}

module.exports = Object.assign({}, carbonConfig, personalConfig)
