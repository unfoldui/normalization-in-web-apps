import React from 'react'
import {isEqual} from 'lodash'

export default class UserName extends React.Component {
	constructor(props) {
		super(props)
		this.flasherContainer = React.createRef()
	}

	//// REACT PERFORMANCE OPTIMIZATION: Adding a deep equality check to avoid wasted renders
	//shouldComponentUpdate(nextProps) {
	//	return !isEqual(nextProps, this.props)
	//}

	componentDidUpdate() {
		this.flasherContainer.current.classList.toggle('flasher-red')
	}

	render() {
		return (
			<h5 className="mt-0" ref={this.flasherContainer}>
				{this.props.name}
			</h5>
		)
	}
}