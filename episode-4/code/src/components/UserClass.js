import React from "react";

class UserClass extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { name, location } = this.props;
		return (
			<div className="user-card">
				<h1>Class-based components</h1>
				<h2>Author Name: {name}</h2>
				<h3>Location: {location}</h3>
				<h4>Contact: @puneetnj</h4>
			</div>
		);
	}
}

export default UserClass;
