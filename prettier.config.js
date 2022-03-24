const carbonConfig = require('prettier-config-carbon')

const personalConfig = {
    semi: false,
    arrowParens: 'avoid'
}

module.exports = Object.assign({}, carbonConfig,personalConfig)
