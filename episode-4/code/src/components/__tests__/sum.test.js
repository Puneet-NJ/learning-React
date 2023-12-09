import { sum } from "../sum";

test("Sum function should return the sum of 2 numbers", () => {
	const result = sum(2, 4);

	expect(result).toBe(6);
});
