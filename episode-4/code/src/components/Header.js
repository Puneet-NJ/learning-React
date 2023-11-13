import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
	const [loginBtn, setLoginBtn] = useState("Login");

	// Experimenting with useEffect
	useEffect(() => {
		console.log("useEffect called");
	}, [loginBtn]);
	// If no dependency array is given => callback function is called on every render.
	// If [] is given => callback function is called only on initial render
	// If [state_variable] is given => callback function is called only when the
	// state_variable is updated.

	return (
		<div id="header">
			<div className="logo-container">
				<img className="logo" src={LOGO_URL} alt="Logo"></img>
			</div>

			<div className="nav-links">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
					<li>Cart</li>
					<button
						className="login"
						onClick={() =>
							loginBtn === "Login"
								? setLoginBtn("Logout")
								: setLoginBtn("Login")
						}
					>
						{loginBtn}
					</button>
				</ul>
			</div>
		</div>
	);
};

export { Header };
