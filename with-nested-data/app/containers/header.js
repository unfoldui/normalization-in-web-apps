import React from 'react'
import {connect} from 'react-redux'
import Header from '../components/Header'
import {userDataUpdated} from '../actions/user'
import {newCommentAdded} from '../actions/comments'

const updatedUserData = {
	name       : "Galileo Galilei",
	profile_pic: "/images/user-1-2.jpg",
	id         : 1
}

const newCommentData = {
	user: updatedUserData,
	id  : 9,
	body: "Rationality wins!"
}

export const mapStateToProps = (state) => {
	return {}
}

export const mapDispatchToProps = (dispatch) => {
	return {
		profilePicChanged: () => dispatch(userDataUpdated(updatedUserData)),
		newCommentAdded  : () => dispatch(newCommentAdded(1, newCommentData))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)