import React from 'react'
import UserProfilePic from '../user/profile-pic'
import UserName from '../user/name'
import {isEqual} from 'lodash'

export default class Comment extends React.Component {
	constructor(props) {
		super(props)
		this.flasherContainer = React.createRef()
	}

	// REACT PERFORMANCE OPTIMIZATION: Adding a deep equality check to avoid wasted renders
	//shouldComponentUpdate(nextProps) {
	//	return !isEqual(nextProps, this.props)
	//}

	componentDidUpdate() {
		this.flasherContainer.current.classList.toggle('flasher-green')
	}


	render() {
		const comment = this.props.comment

		return (
			<div className="media mt-3 post comment" ref={this.flasherContainer}>
				<UserProfilePic profilePic={comment.user.profile_pic}/>

				<div className="media-body">
					<UserName name={comment.user.name}/>
					<p>
						{comment.body}
					</p>
				</div>

			</div>
		)
	}
}