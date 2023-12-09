import Contact from "../Contact.js";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("All the test cases of Contact page", () => {
	it("Should render the header of Contact component", () => {
		render(<Contact />);

		// Querying
		const header = screen.getByRole("heading");

		// Assertion
		expect(header).toBeInTheDocument();
	});

	it("Should render the button from Contact component", () => {
		render(<Contact />);

		// Querying
		const button = screen.getByRole("button");

		// Assertion
		expect(button).toBeInTheDocument();
	});

	it("Should render the input's placeholder from Contact component", () => {
		render(<Contact />);

		// Querying
		const input = screen.getByPlaceholderText("Name");

		// Assertion
		expect(input).toBeInTheDocument();
	});

	it("Should render all the inputs from Contact component", () => {
		render(<Contact />);

		// Querying
		const inputs = screen.getAllByRole("textbox");
		// console.log(typeof inputs[0]);

		// Assertion
		expect(inputs.length).toBe(2);
	});
});
