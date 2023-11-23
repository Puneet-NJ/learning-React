import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
		<div id="header" className="flex justify-between items-center bg-lime-200">
			<div className="logo-container">
				<img
					className="m-8 ml-16 w-24 rounded-full"
					src={LOGO_URL}
					alt="Logo"
				></img>
			</div>

			<div>
				<ul className="flex mx-16">
					<li className="mx-3">
						Online Status: {useOnlineStatus() === true ? "✅" : "🔴"}
					</li>
					<li className="mx-3">
						<Link to="/">Home</Link>
					</li>
					<li className="mx-3">
						<Link to="/about">About Us</Link>
					</li>
					<li className="mx-3">
						<Link to="/contact">Contact Us</Link>
					</li>
					<li className="mx-3">Cart</li>
					<li className="mx-3">
						<Link to="/grocery">Grocery</Link>
					</li>
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
