const utils = {

	isSuccessful(res) {
		if (res.ok) {
			return Promise.resolve(res.json())
		} else {
			return Promise.reject(res)
		}
	},

	getHeaders() {
		return {'Accept': 'application/json', 'Content-Type': 'application/json'}
	},

	callFetch(url, options = {}) {
		return new Promise((resolve, reject) => {
			utils.fetch(url, options, resolve, reject)
		})
	},

	fetch(url, options, resolve, reject, count = 0) {

		return window.fetch(url, {
				...options,
				credentials: 'same-origin',
				headers    : utils.getHeaders()
			}
		)
		.then(utils.isSuccessful)
		.then(resolve)
		.catch(reject)
	}
}

export default utils