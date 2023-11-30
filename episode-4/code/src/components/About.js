import { Header } from "./Header";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import userLoginInfo from "../utils/userLoginInfo";

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
					<div>
						<userLoginInfo.Consumer>
							{({ userName }) => (
								<h1 className="font-bold ">Username: {userName}</h1>
							)}
						</userLoginInfo.Consumer>
					</div>
					<h1>About</h1>
					<h2>This is my about section</h2>

					{/* <User name={"Puneet NJ"} location={"Karnataka"} /> */}
					<UserClass name={"1"} location={"Karnataka"} />
				</div>
			</>
		);
	}
}

export default About;
