import { Header } from "./Header";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
	return (
		<>
			{/* <Header /> */}
			<div className="about">
				<h1>About</h1>
				<h2>This is my about section</h2>

				<User name={"Puneet NJ"} location={"Karnataka"} />
				<UserClass name={"Puneet NJ"} location={"Karnataka"} />
			</div>
		</>
	);
};

export default About;
