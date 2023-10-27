import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { className: "parent" }, [
	React.createElement("div", { className: "child" }, [
		React.createElement("h1", {}, "I'm a h1"),
		React.createElement("h2", {}, "I'm a h2"),
	]),
	,
	React.createElement("div", { className: "child" }, [
		React.createElement("h1", {}, "I'm a h1"),
		React.createElement("h2", {}, "I'm a h2"),
	]),
]);
console.log(heading);

const root = ReactDOM.createRoot(document.querySelector(".container"));

root.render(heading);
