/* config-overrides.js */

const { override, addBabelPreset } = require('customize-cra')

module.exports = {
  webpack: override(
    // emotion css props support
    addBabelPreset('@emotion/babel-preset-css-prop')
  )
}
