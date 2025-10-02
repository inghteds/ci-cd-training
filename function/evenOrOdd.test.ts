test("evenOrOdd function", () => {
  const { evenOrOdd } = require("../function/evenOrOdd");
  expect(evenOrOdd(2)).toBe("Even");
  expect(evenOrOdd(3)).toBe("Odd");
});
