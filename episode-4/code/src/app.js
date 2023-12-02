import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Hi from "./components/Hi";
import userLoginInfo from "./utils/userLoginInfo";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

// App component
const App = () => {
	const [userNameLocal, setUserNameLocal] = useState("");
	// Performed some authorization
	useEffect(() => {
		const user = "Puneet";
		setUserNameLocal(user);
	}, []);

	return (
		<Provider store={appStore}>
			<userLoginInfo.Provider
				value={{ userName: userNameLocal, setUserNameLocal }}
			>
				<div id="app">
					{/* <userLoginInfo.Provider value={{ userName: "Patrick Bateman" }}> */}
					<Header />
					{/* </userLoginInfo.Provider> */}
					{/* Want to load children components based on path, How do I do that?
		 	Outlet component */}
					<Outlet />
				</div>
			</userLoginInfo.Provider>
		</Provider>
	);
};

// Configuration for routes
const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
				children: [
					{
						path: "hi",
						element: <Hi />,
					},
				],
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/grocery",
				element: (
					<Suspense fallback={<h1>Loading...{/*<Shimmer /> */}</h1>}>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: "/restaurants/:resId",
				element: <RestaurantMenu />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
		],
	},
]);

// Rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
