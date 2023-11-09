import { LOGO_URL } from "../utils/constants";

const Header = () => (
	<div id="header">
		<div className="logo-container">
			<img className="logo" src={LOGO_URL} alt="Logo"></img>
		</div>

		<div className="nav-links">
			<ul>
				<li>Home</li>
				<li>About Us</li>
				<li>Contact Us</li>
				<li>Cart</li>
			</ul>
		</div>
	</div>
);

export { Header };
