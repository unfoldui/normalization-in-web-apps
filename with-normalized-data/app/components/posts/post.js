import React from 'react'
import Comments from '../comments'
import UserProfilePic from '../../containers/user/profile-pic'
import UserName from '../../containers/user/name'

export default class Post extends React.Component {
	constructor(props) {
		super(props)
		this.flasherContainer = React.createRef()
	}

	componentDidUpdate() {
		this.flasherContainer.current.classList.toggle('flasher-yellow')
	}

	render() {
		const post = this.props.post

		return (
			<div className="media post" ref={this.flasherContainer}>

				<UserProfilePic userId={post.user}/>

				<div className="media-body">
					<UserName userId={post.user}/>
					<p>
						{post.body}
					</p>
					<Comments commentIds={post.comments}/>
				</div>

			</div>
		)
	}
}