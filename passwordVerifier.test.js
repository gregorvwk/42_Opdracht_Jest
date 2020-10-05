const {
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
} = require("./passwordVerifier");

test("should not be blank", () => {
  expect(isNotNull("pass")).toBe(true);
});

test("shoukd have the right length", () => {
  expect(hasRightLength("12345678")).toBe(true);
});
test("should have the right length", () => {
  expect(hasRightLength("123456789")).toBe(false);
});

test("should have uppercase", () => {
  expect(hasUpperCaseCharacter("Asdfg")).toBe(true);
});

test("should have lower case", () => {
  expect(hasLowerCaseCharacter("aSDF")).toBe(true);
});

test("should have a digit", () => {
  expect(hasDigit("dfgh564")).toBe(true);
});

test("has reached minimum conditions", () => {
  expect(minimumConditionsReached([true, true, true, false])).toBe(true);
});

test("is password verified", () => {
  expect(verifyPassword("sdf4H")).toBe(true);
});
