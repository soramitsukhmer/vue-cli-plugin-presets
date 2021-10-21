const package = require('./packages')

module.exports = api => {
  api.extendPackage(package)
  api.render('./template')
}
