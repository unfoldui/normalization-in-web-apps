import React from 'react'

export default class Header extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<header className="navbar navbar-dark bg-dark box-shadow">
				<div className="container">
					<div className="col-4 d-flex justify-content-start align-items-center">
						<a href="/" className="navbar-brand">
							<strong>Stalk Exchange</strong>
						</a>
					</div>
					<div className="col-4 d-flex justify-content-end align-items-center">
						<button type="button" className="btn btn-primary btn-sm mr-3" onClick={this.props.newCommentAdded}>
							Add a comment
						</button>
						<button type="button" className="btn btn-primary btn-sm" onClick={this.props.profilePicChanged}>
							Update User Data
						</button>
					</div>

				</div>
			</header>
		)
	}
}
