import { Header } from "./Header";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
	constructor(props) {
		super(props);

		console.log("Inside parent constructor");
	}

	componentDidMount() {
		console.log("Inside parent componentDidMount");
	}

	render() {
		console.log("Inside parent render");

		return (
			<>
				{/* <Header /> */}
				<div className="about">
					<h1>About</h1>
					<h2>This is my about section</h2>

					{/* <User name={"Puneet NJ"} location={"Karnataka"} /> */}
					<UserClass name={"1"} location={"Karnataka"} />
					<UserClass name={"2"} location={"Karnataka"} />
				</div>
			</>
		);
	}
}

export default About;
