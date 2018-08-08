import React from 'react'

export default class UserProfilePic extends React.Component {
	constructor(props) {
		super(props)
		this.flasherContainer = React.createRef()
	}

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