import { useState } from "react";

const User = (props) => {
	const { name, location } = props;

	const [count] = useState(0);
	const [count2] = useState(1);

	return (
		<div className="user-card">
			<h1>Count:{count}</h1>
			<h1>Count:{count2}</h1>
			<h1>Functional components</h1>
			<h2>Author Name: {name}</h2>
			<h3>Location: {location}</h3>
			<h4>Contact: @puneetnj</h4>
		</div>
	);
};

export default User;
