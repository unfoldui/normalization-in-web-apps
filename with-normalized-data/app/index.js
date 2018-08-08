import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Cmd} from 'redux-loop'
import configureStore from './store/configure-store'
import {Provider} from 'react-redux'
import {initializeCurrentLocation} from 'redux-little-router'
import App from './components/pages/app'
import {requestPosts} from './actions/posts'
import API from './API/api'

export let store = configureStore()

export const dispatchInitialLocation = () => {
	const currentLocation = store.getState().router
	if (currentLocation)
		return initializeCurrentLocation(currentLocation)
	else {
		return Cmd.none
	}
}

export const renderTheDom = () => ReactDOM.render(Component, document.getElementById('app'))


export const Component = <Provider store={store}>
	<App/>
</Provider>

dispatchInitialLocation()
renderTheDom()
API.init()

store.dispatch(requestPosts())