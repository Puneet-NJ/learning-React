/**
 * <div parent1>
 *      <div>
 *          <h1>hi from h1 tag</h1>
 *      </div>
 *
 *      <div>
 *          <h1>hi from h1 tag</h1>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
	React.createElement("div", { id: "child" }, [
		React.createElement("h1", { id: "child" }, "hello from h1"),
		React.createElement("h2", { id: "child" }, "hello from h2"),
	]),
	,
	React.createElement("div", { id: "child2" }, [
		React.createElement("h1", { id: "child" }, "hello from h1"),
		React.createElement("h2", { id: "child" }, "hello from h2"),
	]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
