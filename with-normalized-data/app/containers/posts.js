import React from 'react'
import {connect} from 'react-redux'
import Posts from '../components/posts'

export const mapStateToProps = (state) => {
	return {
		postIds: state.posts.allIds
	}
}

export default connect(mapStateToProps)(Posts)