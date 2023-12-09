import RestaurentCard, { withPromotedLabel } from "../RestaurentCard";
import MOCK_RESCARD from "../mocks/MockRestaurantCard.json";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should render my Restaurant Card with name", () => {
	render(<RestaurentCard resName={MOCK_RESCARD} />);

	const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");

	expect(name).toBeInTheDocument();
});

it("Should render Restaurant Card with promoted label", () => {
	// render(<withPromotedLabel/>)
});
