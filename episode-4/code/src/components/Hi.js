import React from "react";

class Hi extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		setInterval(() => {
			console.log("Hi");
		}, 1000);
	}

	render() {
		return (
			<div>
				<h1>Hi</h1>
			</div>
		);
	}
}

export default Hi;
