import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";

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
