import {createStore, applyMiddleware, compose} from 'redux'
import {routerForBrowser} from 'redux-little-router'
import {install} from 'redux-loop'
import routes from '../router'
import reducers from '../reducers'
import {getWindowHrefValue} from '../utils/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reduxEnhancer = composeEnhancers(
	install(), // DO NOT MOVE
)


export default function configureStore(initialState) {
	const store = createStore(reducers, initialState, reduxEnhancer)

	if (module.hot) {
		module.hot.accept('../reducers', () =>
			store.replaceReducer(require('../reducers'))
		)
	}

	return store;
}