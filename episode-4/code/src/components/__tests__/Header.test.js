import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render my login button", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	// Querying
	const loginBtn = screen.getByRole("button");

	// Assertion
	expect(loginBtn).toBeInTheDocument();
});

it("Should render my Cart(0 items)", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	// Querying
	const cart = screen.getByText("Cart(0 items)");

	// Assertion
	expect(cart).toBeInTheDocument();
});

it("Should render my Cart", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	// Querying
	const cart = screen.getByText(/Cart/); // I can use regex aswell

	// Assertion
	expect(cart).toBeInTheDocument();
});

it("Should test my button changing from login to logout", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	// Querying
	const loginBtn = screen.getByRole("button", { name: "Login" });

	fireEvent.click(loginBtn);

	const logoutBtn = screen.getByRole("button", { name: "Logout" });

	// Assertion
	expect(logoutBtn).toBeInTheDocument();
});
