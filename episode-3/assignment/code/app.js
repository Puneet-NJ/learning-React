import React from "react";
import ReactDOM from "react-dom/client";

// Q: Create a Nested header Element using React.createElement
// (h1,h2,h3 inside a div with class "title")

// const header1 = React.createElement(
// 	"h1",
// 	{ className: "header1", key: "h1" },
// 	"Hi from h1"
// );
// const header2 = React.createElement(
// 	"h2",
// 	{ className: "header2", key: "h2" },
// 	"Hi from h2"
// );
// const header3 = React.createElement(
// 	"h3",
// 	{ className: "header3", key: "h3" },
// 	"Hi from h3"
// );

// const div = React.createElement("div", { className: "divElement" }, [
// 	header1,
// 	header2,
// 	header3,
// ]);

const root = ReactDOM.createRoot(document.querySelector(".container"));

// root.render(div);

// Create the same element using JSX
// const head1 = <h1>This is h1</h1>;
// const head2 = <h2>This is h2</h2>;
// const head3 = <h3>This is h3</h3>;

// const div2 = (
// 	<div className="divElement">
// 		{head1} {head2} {head3}
// 	</div>
// );
// root.render(div2);

// Create a functional component of the same with JSX
// const Div3 = () => (
// 	<div className="divElement">
// 		{head1} {head2} {head3}
// 	</div>
// );
// root.render(<Div3 />);

// Pass attribute into the tag in JSX
// const Div4 = () => (
// 	<div className="divElement">
// 		<h1 className="h1">Yes, h1</h1>
// 		<h2 className="h2">Yes, h2</h2>
// 		<h3 className="h3">Yes, h3</h3>
// 	</div>
// );
// root.render(<Div4 />);

// Composition of Component (Add a component inside another)
// const HeadComponent1 = () => <h1>Hello from h1</h1>;
// const HeadComponent2 = () => <h2>Hello from h1</h2>;
// const HeadComponent3 = () => <h3>Hello from h1</h3>;

// const Div5 = () => (
// 	<div>
// 		<HeadComponent1 />
// 		<HeadComponent2 />
// 		<HeadComponent3 />
// 	</div>
// );
// root.render(<Div5 />);

// `{TitleComponent}` vs `{<TitleComponent/>}` vs
// `{<TitleComponent></TitleComponent>}` in JSX.

// {TitleComponent} like loading JSX
const title = <div className="title">From title</div>;
const TitleComponent = () => {
	return (
		<div>
			From TitleComponent1
			{title}
		</div>
	);
};
// root.render(<TitleComponent />);

// {<TitleComponent/>} is like loading a component
const TitleComponent2 = () => (
	<div className="titleComp2">
		From TitleComponent2
		{<TitleComponent />}
	</div>
);
// root.render(<TitleComponent2 />);

// {<TitleComponent></TitleComponent>}

const Example1 = () => <div>Example 1</div>;
const Example2 = () => <div>Example 2</div>;
const Example3 = () => <div>Example 3</div>;
const TitleComponent3 = () => (
	<div className="titleComp3">
		From TitleComponent3
		{
			<TitleComponent2>
				{/* <Example1 />
				<Example2 />
				<Example3 /> */}
			</TitleComponent2>
		}
	</div>
);
root.render(<TitleComponent3 />);
