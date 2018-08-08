module.exports = (req, res, next) => {
	res.header('web-version', '31')
	res.header('ios-app-version', '1.11')
	next()
}