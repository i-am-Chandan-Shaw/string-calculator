import { add } from '../src/stringCalculator';

test('should return 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('should return the number itself for a single number', () => {
  expect(add("1")).toBe(1);
});

test('should return the sum for two numbers', () => {
  expect(add("1,5")).toBe(6);
});

test('should handle custom delimiters', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('should throw an exception for negative numbers', () => {
  expect(() => add("1,-2")).toThrow("negative numbers not allowed: -2");
});

test('should throw an exception for multiple negative numbers', () => {
  expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2,-3");
});

