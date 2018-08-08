import React from 'react'
import Comments from '../comments'
import UserProfilePic from '../user/profile-pic'
import UserName from '../user/name'
import {isEqual} from 'lodash'

export default class Post extends React.Component {
	constructor(props) {
		super(props)
		this.flasherContainer = React.createRef()
	}

	//// REACT PERFORMANCE OPTIMIZATION: Adding a deep equality check to avoid wasted renders
	//shouldComponentUpdate(nextProps) {
	//	return !isEqual(nextProps, this.props)
	//}

	componentDidUpdate() {
		console.log()
		this.flasherContainer.current.classList.toggle('flasher-yellow')
	}

	render() {
		const post = this.props.post

		return (
			<div className="media post" ref={this.flasherContainer}>

				<UserProfilePic profilePic={post.user.profile_pic}/>

				<div className="media-body">
					<UserName name={post.user.name}/>
					<p>
						{post.body}
					</p>
					<Comments comments={post.comments}/>
				</div>

			</div>
		)
	}
}