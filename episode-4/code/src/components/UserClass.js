import React from "react";

class UserClass extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "ABC",
			location: "Default",
		};
		// console.log(this.props.name + " Inside constructor");
	}

	async componentDidMount() {
		// console.log(this.props.name + " Inside componentDidMount");

		const data = await fetch("https://api.github.com/users/puneet-nj");
		const json = await data.json();

		// console.log(json);
		this.setState({
			name: json.login,
			location: json.location,
			avatar_url: json.avatar_url,
		});
		// We see that this is executed after render so we can use it for API calls.💡
	}

	componentDidUpdate() {
		// This method will be called after componentDidMount.
	}

	componentWillUnmount() {
		// This will be called after the UserClass component will be unmounted.
		console.log("Component will unmount");
	}

	render() {
		// console.log(this.props.name + " Inside render");

		// const { name, location } = this.props;
		let { name, location, avatar_url } = this.state;
		return (
			<div className="user-card">
				{/* <h1>Count: {count}</h1> */}
				{/* <button
					onClick={() => {
						this.setState({
							count: this.state.count + 1,
						});
					}}
				>
					Increment count
				</button> */}
				<img src={avatar_url}></img>
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
