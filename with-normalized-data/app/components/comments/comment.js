import React from 'react'
import UserProfilePic from '../../containers/user/profile-pic'
import UserName from '../../containers/user/name'

export default class Comment extends React.Component {
	constructor(props) {
		super(props)
		this.flasherContainer = React.createRef()
	}

	componentDidUpdate() {
		this.flasherContainer.current.classList.toggle('flasher-green')
	}

	render() {
		const comment = this.props.comment

		return (
			<div className="media mt-3 post comment" ref={this.flasherContainer}>
				<UserProfilePic userId={comment.user}/>

				<div className="media-body">
					<UserName userId={comment.user}/>
					<p>
						{comment.body}
					</p>
				</div>

			</div>
		)
	}
}