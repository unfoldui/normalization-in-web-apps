import {Cmd, loop} from 'redux-loop'
import {RECEIVE_POSTS, receivePosts, REQUEST_POSTS} from '../actions/posts'
import API from '../API/api'
import {USER_DATA_UPDATED} from '../actions/user'
import {NEW_COMMENT_ADDED} from '../actions/comments'

export default (state = [], action) => {
	switch (action.type) {

		case REQUEST_POSTS:
			return loop(
				state,
				Cmd.run(API.posts.get, {
					successActionCreator: receivePosts,
					args                : []
				})
			)

		case RECEIVE_POSTS:
			return [
				...state,
				...action.payload.data
			]

		case USER_DATA_UPDATED:
			return updateUserData(action.payload.user, state)


		case NEW_COMMENT_ADDED:
			return addComment(action.payload.postId, action.payload.newComment, state)


		default:
			return state
	}
}

function updateUserData(newUserData, posts) {
	return posts.map((post) => {
		return {
			...post,
			user    : post.user.id === newUserData.id ? newUserData : post.user,
			comments: post.comments.length && updateUserDataInComments(newUserData, post.comments)
		}
	})
}

function updateUserDataInComments(newUserData, comments) {
	return comments.map((comment) => {
		return {
			...comment,
			user: comment.user.id === newUserData.id ? newUserData : comment.user
		}
	})
}


function addComment(postId, newComment, posts) {
	return posts.map((post) => {
		if (post.id !== postId)
			return post

		return {
			...post,
			comments: [...post.comments, newComment]
		}
	})
}