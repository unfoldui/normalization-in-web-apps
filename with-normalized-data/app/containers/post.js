import React from 'react'
import {connect} from 'react-redux'
import Post from '../components/posts/post'

export const mapStateToProps = (state, ownProps) => {
	return {
		post: state.posts.byId[ownProps.postId]
	}
}

export default connect(mapStateToProps)(Post)