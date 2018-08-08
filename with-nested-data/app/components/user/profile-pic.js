import React from 'react'
import {isEqual} from 'lodash'

export default class UserProfilePic extends React.Component {
	constructor(props) {
		super(props)
		this.flasherContainer = React.createRef()
	}

	//// REACT PERFORMANCE OPTIMIZATION: Adding a deep equality check to avoid wasted renders
	//shouldComponentUpdate(nextProps) {
	//	return !isEqual(nextProps, this.props)
	//}

	componentDidUpdate() {
		this.flasherContainer.current.classList.toggle('flasher-border-red')
	}

	render() {
		const styles = {
			backgroundImage: `url(${this.props.profilePic})`
		}

		return <div className="profile-pic" style={styles} ref={this.flasherContainer}></div>
	}
}