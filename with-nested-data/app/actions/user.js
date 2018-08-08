export const USER_DATA_UPDATED = "USER_DATA_UPDATED"

export function userDataUpdated(user) {
	return {
		type   : USER_DATA_UPDATED,
		payload: {user}
	}
}