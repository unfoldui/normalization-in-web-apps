import {Cmd, loop} from 'redux-loop'
import {RECEIVE_POSTS, receivePosts, REQUEST_POSTS} from '../actions/posts'
import {NEW_COMMENT_ADDED} from '../actions/comments'
import API from '../API/api'
import {postsSchema} from '../schema'
import {normalize} from 'normalizr'

export default (state = {
	allIds: [],
	byId  : {}
}, action) => {
	switch (action.type) {

		case REQUEST_POSTS:
			return loop(
				state,
				Cmd.run(API.posts.get, {
					successActionCreator: (data) => receivePosts(normalize(data, postsSchema)),
					args                : []
				})
			)

		case RECEIVE_POSTS: {
			return {
				...state,
				byId  : action.payload.data.entities.posts,
				allIds: action.payload.data.result
			}
		}

		case NEW_COMMENT_ADDED: {

			const postId = action.payload.postId

			const post         = state.byId[postId]
			const newCommentId = action.payload.comment.result

			return {
				...state,
				byId: {
					...state.byId,
					[postId]: {
						...post,
						comments: [...post.comments, newCommentId]
					}
				}
			}
		}

		default:
			return state
	}
}