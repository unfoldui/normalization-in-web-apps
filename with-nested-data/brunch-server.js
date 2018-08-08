var config      = {
	    proxyTo: {
		    target: "http://localhost:2000/",
		    delim : "/api"
	    },
	    server : {
		    port: 7777
	    },
    },
    express     = require('express'),
    simpleProxy = require('simple-http-proxy'),
    compression = require('compression'),
    app         = express(),
    proxyTo     = config.proxyTo,
    delim       = proxyTo.delim,
    target      = proxyTo.target,
    httpProxy   = simpleProxy(target, {
	    timeout: 60000
    });

app.use(compression());
app.use(express.static(__dirname + "/dist"));

app.use(delim, function (req, res, next) {
	return httpProxy(req, res, next);
});

app.get('*', function (request, response) {
	response.sendFile(__dirname + '/dist/index.html');
});

exports.startServer = function (port, path, callback) {
	app.listen(config.server.port)
	callback();
	console.log('Server started at http://localhost:' + config.server.port)
}