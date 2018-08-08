import React from 'react'
import {connect} from 'react-redux'
import Posts from '../components/posts'

export const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(Posts)