import {createStore, applyMiddleware, compose} from 'redux'
import {routerForBrowser} from 'redux-little-router'
import {install} from 'redux-loop'
import {responsiveStoreEnhancer} from 'redux-responsive'
import routes from '../router'
import reducers from '../reducers'

const {
	      enhancer,
	      middleware
      } = routerForBrowser({routes})


const reduxEnhancer = compose(
	enhancer, // Redux little router middleware
	install(), // DO NOT MOVE
	applyMiddleware(middleware), // Redux little router middleware
	responsiveStoreEnhancer
)

export default function configureStore(initialState) {
	return createStore(reducers, initialState, reduxEnhancer)
}