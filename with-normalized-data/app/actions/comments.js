export const REQUEST_COMMENTS = "REQUEST_COMMENTS"
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const ADD_COMMENT      = "ADD_COMMENT"
export const DELETE_COMMENT   = "DELETE_COMMENT"
export const COMMENT_UPDATED  = "COMMENT_UPDATED"
export const COMMENT_DELETED  = "COMMENT_DELETED"

export const COMMENTS_RECEIVED = "COMMENTS_RECEIVED"
export const NEW_COMMENT_ADDED = "NEW_COMMENT_ADDED"


export function newCommentAdded(postId, comment) {
	return {
		type   : NEW_COMMENT_ADDED,
		payload: {
			postId,
			comment
		}
	}
}

export function requestComments(postId) {
	return {
		type   : REQUEST_COMMENTS,
		payload: {postId}
	}
}

export function receiveComments(postId, comment) {
	return {
		type   : RECEIVE_COMMENTS,
		payload: {postId, comment}
	}
}

export function addComment(postId, comment) {
	return {
		type   : ADD_COMMENT,
		payload: {postId, comment}
	}
}

export function deleteComment(postId, comment) {
	return {
		type   : DELETE_COMMENT,
		payload: {postId, comment}
	}
}

export function commentDeleted(postId, commentId) {
	return {
		type   : COMMENT_DELETED,
		payload: {postId, commentId}
	}
}

export function commentUpdated(postId, commentId, comment) {
	return {
		type   : COMMENT_UPDATED,
		payload: {postId, commentId, comment}
	}
}

export function commentsReceived(comments) {
	return {
		type   : COMMENTS_RECEIVED,
		payload: {comments}
	}
}