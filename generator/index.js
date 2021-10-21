const package = require('./packages')

module.exports = api => {
  api.extendPackage(package)
  api.render('./template')

  // adapted from https://github.com/vuetifyjs/vue-cli-plugins/blob/master/packages/vue-cli-plugin-vuetify/generator/index.js
  api.onCreateComplete(() => {
    api.exitLog('Github: https://github.com/soramitsukhmer/vue-cli-plugin-presets')
  })
}
