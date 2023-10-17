/**
 *
 * <div class="parent">
 *      <div class="child">
 *           <h1></h1>
 *      </div>
 *      <div class="child2">
 *           <h1></h1>
 *      </div>
 * </div>
 */

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
