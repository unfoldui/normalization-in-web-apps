import React from 'react'
import Comment from './comment'

export default class Comments extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			this.props.comments.map((comment, i) => <Comment key={i} comment={comment}/>)
		)
	}
}