import React from 'react'
import Comment from '../../containers/comment'

export default class Comments extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="comment-list">
				{
					this.props.commentIds.map((commentId) => <Comment commentId={commentId}/>)
				}
			</div>
		)
	}
}