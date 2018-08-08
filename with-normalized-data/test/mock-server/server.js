const path              = require('path')
const jsonServer        = require('json-server')
const server            = jsonServer.create()
const router            = jsonServer.router(require(path.join(__dirname, 'store/db.js')))
const routes            = require(path.join(__dirname, 'routes.json'))
const defaultMiddleware = jsonServer.defaults()

const headers     = require(path.join(__dirname, 'middlewares/xcsrf.js'))
const version     = require(path.join(__dirname, 'middlewares/version.js'))
const postRewrite = require(path.join(__dirname, 'middlewares/postRewrite.js'))


server.use(defaultMiddleware)
server.use(jsonServer.rewriter(routes))
server.use(jsonServer.bodyParser)

server.use(headers)
server.use(version)
server.use(postRewrite)

//server.use((req, res, next) => {
//	if (req.path === '/practice-preferences') {
//			return res.sendStatus(500)
//	} else {
//		next()
//	}
//})


server.use(router)

server.listen(4000, () => {
	console.log('JSON Server is running at http://localhost:4000/')
})