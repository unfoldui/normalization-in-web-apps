import React from 'react'
import Post from './post'

export default class Posts extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			this.props.posts.map((post, i) => <Post key={i} post={post}/>)
		)
	}
}