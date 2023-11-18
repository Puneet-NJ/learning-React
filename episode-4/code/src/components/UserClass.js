import React from "react";

class UserClass extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 1,
			count2: 2,
		};
		console.log(this.props.name + " Inside constructor");
	}

	componentDidMount() {
		console.log(this.props.name + " Inside componentDidMount");
		// We see that this is executed after render so we can use it for API calls.💡
	}

	render() {
		console.log(this.props.name + " Inside render");

		const { name, location } = this.props;
		let { count, count2 } = this.state;
		return (
			<div className="user-card">
				<h1>Count: {count}</h1>
				<button
					onClick={() => {
						this.setState({
							count: this.state.count + 1,
						});
					}}
				>
					Increment count
				</button>
				<h1>Class-based components</h1>
				<h2>Author Name: {name}</h2>
				<h3>Location: {location}</h3>
				<h4>Contact: @puneetnj</h4>
			</div>
		);
	}
}

/*
	💡💡💡When multiple child components than render and commit phase are seprated.
*/

export default UserClass;
