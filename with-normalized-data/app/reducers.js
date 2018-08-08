import {combineReducers} from 'redux-loop'
import {routerForBrowser} from 'redux-little-router'
import routes from './router'

const {reducer} = routerForBrowser({routes})

import posts from './reducers/posts'
import comments from './reducers/comments'
import users from './reducers/users'

export default combineReducers({
	posts,
	comments,
	users
})