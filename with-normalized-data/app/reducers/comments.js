import {RECEIVE_POSTS} from '../actions/posts'
import {NEW_COMMENT_ADDED} from '../../../with-nested-data/app/actions/comments'

export default (state = {
	byId: {}
}, action) => {
	switch (action.type) {

		case RECEIVE_POSTS:
			return {
				...state,
				byId: action.payload.data.entities.comments
			}

		case NEW_COMMENT_ADDED: {

			const newComment = action.payload.comment.entities.comments

			return {
				...state,
				byId: {
					...state.byId,
					...newComment
				}
			}
		}

		default:
			return state
	}
}