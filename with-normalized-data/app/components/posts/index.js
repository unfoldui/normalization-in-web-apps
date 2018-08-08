import React from 'react'
import Post from '../../containers/post'

export default class Posts extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			this.props.postIds.map((postId) => <Post postId={postId}/>)
		)
	}
}