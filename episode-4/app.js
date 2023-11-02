import React from "react";
import ReactDOM from "react-dom/client";

/****
 *
 * What I want to create?
 *
 *  - Header
 *      -Logo
 *      -nav-links
 *  - Body
 *      -Search
 *      -Restaurent container
 *          -Restaurent card
 *              -img
 *              -restaurent-name
 *              -cuisine
 *              -rating
 *              -delivery-time
 * - Footer
 *      -Copyright
 *      -Links
 *
 */

// Header component
const Header = () => (
	<div id="header">
		<div className="logo-container">
			<img
				className="logo"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFISqcc4R1GJFip0UNugkmppxG3cIbPkPh3AdykGCshTUw-lZvBQcvag9iO8yOOy01DMc&usqp=CAU"
				alt="Logo"
			></img>
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

const RestaurentCard = () => (
	<div className="restaurent-card">
		<img
			className="restaurent-img"
			src="https://b.zmtcdn.com/data/pictures/0/18651620/9c06961d5aed713bc72efcc94325a02b_o2_featured_v2.jpg?output-format=webp"
		></img>
		<h3 className="restaurent-name">Midnight Eats</h3>
		<h4 className="cuisine">
			Rolls, North Indian, Chinese, Beverages, Sichuan
		</h4>
		<div className="restaurent-rating">4.2 &#x2605;</div>
		<div className="delivery-time">40mins</div>
	</div>
);
// Body component
const Body = () => (
	<div id="body">
		<div className="search">
			<form>
				<input
					type="text"
					className="search-bar"
					placeholder="Enter Restaurent Name"
				></input>
				<button type="submit">Search</button>
			</form>
		</div>

		<div className="res-container">
			<RestaurentCard />
			<RestaurentCard />
			<RestaurentCard />
			<RestaurentCard />
			<RestaurentCard />
			<RestaurentCard />
			<RestaurentCard />
			<RestaurentCard />
			<RestaurentCard />
			<RestaurentCard />
			<RestaurentCard />
			<RestaurentCard />
			<RestaurentCard />
			<RestaurentCard />
		</div>
	</div>
);

// App component
const App = () => (
	<div id="app">
		<Header />
		<Body />
	</div>
);
// Rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
