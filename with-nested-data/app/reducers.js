import {combineReducers} from 'redux-loop'
import {routerForBrowser} from 'redux-little-router'
import routes from './router'

const {reducer} = routerForBrowser({routes})

import posts from './reducers/posts'

export default combineReducers({
	posts
})