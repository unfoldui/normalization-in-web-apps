import React from 'react'

export default class UserName extends React.Component {
	constructor(props) {
		super(props)
		this.flasherContainer = React.createRef()
	}

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