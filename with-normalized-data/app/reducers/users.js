import {RECEIVE_POSTS} from '../actions/posts'
import {USER_DATA_UPDATED} from '../actions/user'

export default (state = {
	byId: {}
}, action) => {
	switch (action.type) {

		case RECEIVE_POSTS:
			return {
				...state,
				byId: action.payload.data.entities.users
			}

		case USER_DATA_UPDATED:
			return {
				...state,
				byId: {
					...state.byId,
					[action.payload.user.id]: {
						...action.payload.user
					}
				}
			}

		default:
			return state
	}
}