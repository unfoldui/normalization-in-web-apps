import 'isomorphic-fetch'
import util from './util'

const comments = (host = '') => {
	return {
		get(postId) {
			return util.callFetch(`${host}/api/posts/${postId}/comments`)
		},
		add(postId, comment) {
			return util.callFetch(`${host}/api/posts/${postId}/comments`, {
				method: 'POST',
				body  : JSON.stringify(comment)
			})
		},
		delete(postId, commentId) {
			return util.callFetch(`${host}/api/posts/${postId}/comments/${commentId}`, {
				method: 'DELETE'
			})
		}
	}
}

export default comments
