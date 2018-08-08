import React from 'react'
import Header from '../../containers/header'
import Posts from '../../containers/posts'


export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<div className="container">
					<Posts/>
				</div>
			</div>
		)
	}
}