import React from "react";
import ReactDOM from "react-dom/client";

//  JSX = React element = JS obj => After rendering => HTMLElement
// JSX is HTML-like syntax not HTML
// JSX is not part of JS or React it is done using parcel i.e. babel(it is a JS engine)
// babel transpiles before it reaches JS

// JSX is converted to React.createElement, hence both are same
// Who does it? BABEL
// JSX => React.createElement => ReactElement-JS object => HTMLElement(render )

// This is JSX or React element
const heading = (
	<h1 id="heading" tabIndex="1">
		Hello from JSX or React element🚀
	</h1>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(heading);

// React Components---- 2types
// Class-Based Components(OLD)
// Functional Components(NEW)

// So, what are functional components?
// It is JS function which returns a JSX or react element
const Heading2 = () => <h1>Hello from Functional Component1</h1>;

// How to render a functional component?
// root.render(<Heading2 />);

// Component Composition i.e. Component inside another component
const Heading3 = () => (
	<div id="contanier">
		<Heading2 /> {/* rendering one Component inside another component */}
		<h1>Hello from Functional Component2 🚀</h1>
	</div>
);

// root.render(<Heading3 />);

// I can use normal functions instead of arrow functions

// Using {} in your JSX you can write JS
const Heading4 = () => (
	<div id="cont">
		<Heading3 />
		{`Hi from JS, calculation = ${1 + 4}`}
	</div>
);
// root.render(<Heading4 />);

// How to put an Element inside a Component?
// YK, an element is stored in what? a JS variable. So,
const Heading5 = () => (
	<div id="container">
		<Heading4 />
		{heading}
	</div>
);
// root.render(<Heading5 />);

// How to put a Component inside an Element?
const heading6 = <Heading5 />;
// root.render(heading6);

// How to put an Element inside an Element?
const heading7 = <div id="container">{heading6}</div>;
// or const heading7 = heading6
root.render(heading7);

// So, now we know we can use anything inside anything i.e.
// 1) an Element inside an Element
// 2) a Component inside an Element
// 3) an Element inside a Component
// 4) a Component inside another component

//  You can render Component in multiple ways:
// <Heading2 />
// <Heading2></Heading>
// {Heading2()} because this is a JS function, so i can call it.

// rendering an Element: {heading}
// rendering a Component: {Heading2()}
