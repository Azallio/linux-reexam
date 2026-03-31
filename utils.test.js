const { addNumbers } = require("./utils");

describe("addNumbers", () => {
	test("2 + 3 = 5", () => {
		expect(addNumbers(2, 3)).toBe(5);
	});

	test("-1 + 1 = 0", () => {
		expect(addNumbers(-1, 1)).toBe(0);
	});

	test("0 + 0 = 0", () => {
		expect(addNumbers(0, 0)).toBe(0);
	});
});
