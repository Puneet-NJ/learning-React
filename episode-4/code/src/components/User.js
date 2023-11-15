const User = (props) => {
	const { name, location } = props;
	return (
		<div className="user-card">
			<h1>Functional components</h1>
			<h2>Author Name: {name}</h2>
			<h3>Location: {location}</h3>
			<h4>Contact: @puneetnj</h4>
		</div>
	);
};

export default User;
