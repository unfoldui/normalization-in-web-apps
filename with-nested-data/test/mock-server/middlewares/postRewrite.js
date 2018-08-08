const path = require('path')
const db   = require(path.join(__dirname, '../store/post/db.js'))

module.exports = (req, res, next) => {
	const path = req.path

	if (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH' || req.method === 'DELETE') {
		//if (path === '/email')
		//	return res.status(422).send({
		//		"errorMessage": "Template Name can not be empty",
		//		"requestPath" : null,
		//		"requestId"   : null,
		//		"errorCode"   : 418
		//	});
		return res.json(db[path.substr(1, path.length)])
	} else {
		next()
	}
}