const path = require('path')

module.exports = function (fileName) {
	return require(path.join(__dirname, fileName))
}