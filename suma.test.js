import suma from "./suma";

test("sumar 1 + 2 es igual a 3", () => {
  expect(suma(1, 2)).toBe(3);
});

test("sumar 2 + 1 es igual a 3", () => {
  expect(suma(2, 1)).toBe(3);
});
