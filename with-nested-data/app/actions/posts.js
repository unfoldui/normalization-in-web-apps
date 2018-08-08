export const REQUEST_POSTS      = "REQUEST_POSTS"
export const RECEIVE_POSTS      = "RECEIVE_POSTS"
export const REQUEST_MORE_POSTS = "RECEIVE_POSTS"
export const RECEIVE_MORE_POSTS = "RECEIVE_MORE_POSTS"

export function requestPosts() {
	return {
		type   : REQUEST_POSTS,
		payload: {}
	}
}

export function receivePosts(data) {
	return {
		type   : RECEIVE_POSTS,
		payload: {data}
	}
}

export function requestMorePosts() {
	return {
		type   : REQUEST_MORE_POSTS,
		payload: {}
	}
}

export function receiveMorePosts() {
	return {
		type   : RECEIVE_MORE_POSTS,
		payload: {}
	}
}
