import React from "react";
import ReactDOM from "react-dom/client";

//  JSX = React element = JS obj => After rendering => HTMLElement
// JSX is HTML-like syntax not HTML
// JSX is not part of JS or React it is done using parcel i.e. babel(it is a JS engine)
// babel transpiles before it reaches JS

// JSX is converted to React.createElement, hence both are same
// Who does it? BABEL
// JSX => React.createElement => ReactElement-JS object => HTMLElement(render )
const heading = (
	<h1 id="heading" tabIndex="1">
		Hello from JSX 🚀
	</h1>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(heading);

//
const h1 = document.createElement("h1");

h1.innerText = "My website";
