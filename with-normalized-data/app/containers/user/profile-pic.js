import React from 'react'
import {connect} from 'react-redux'
import UserProfilePic from '../../components/user/profile-pic'

export const mapStateToProps = (state, ownProps) => {
	return {
		profilePic: state.users.byId[ownProps.userId].profile_pic
	}
}

export const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePic)