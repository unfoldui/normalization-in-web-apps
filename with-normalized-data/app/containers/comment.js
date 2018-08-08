import React from 'react'
import {connect} from 'react-redux'
import Comment from '../components/comments/comment'

export const mapStateToProps = (state, ownProps) => {
	return {
		comment: state.comments.byId[ownProps.commentId]
	}
}

export const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)