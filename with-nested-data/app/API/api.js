import 'isomorphic-fetch'
import posts from './posts'
import comments from './comments'

export default {
	init() {
		this.posts    = posts()
		this.comments = comments()
	}
}