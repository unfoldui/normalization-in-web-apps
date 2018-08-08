import React from 'react'
import {connect} from 'react-redux'
import UserName from '../../components/user/name'

export const mapStateToProps = (state, ownProps) => {
	return {
		name: state.users.byId[ownProps.userId].name
	}
}

export const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserName)