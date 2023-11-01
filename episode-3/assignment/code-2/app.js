import React from "react";
import ReactDOM from "react-dom/client";

import logoImg from "./images/logo.png";
import searchImg from "./images/search-icon.png";
import userImg from "./images/user icon.png";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const logo = <img src={logoImg} alt="Logo image" className="logo"></img>;

const SearchBar = () => (
	<div className="search">
		<input type="text" placeholder="Search anything you want..."></input>
		<button type="submit" className="searchBtn">
			Search
		</button>
	</div>
);

const userLogo = (
	<img src={userImg} alt="User Image" className="userLogo"></img>
);

const Header = () => (
	<div className="header">
		{logo}
		{<SearchBar />}
		{userLogo}
	</div>
);

root.render(<Header />);
