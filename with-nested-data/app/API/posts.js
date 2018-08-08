import 'isomorphic-fetch'
import util from './util'

const posts = (host = '') => {
	return {
		get() {
			return util.callFetch(`${host}/api/posts`)
		},
		getMore() {
			return util.callFetch(`${host}/api/more-posts`)
		}
	}
}

export default posts
