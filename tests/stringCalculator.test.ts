import { StringCalculator } from '../src/stringCalculator';

let calculator: StringCalculator;

beforeEach(() => {
  calculator = new StringCalculator();
});

// ============ Handle 0, 1, or 2 numbers ============= \\
test('Step 1: empty string returns 0', () => {
  expect(calculator.add("")).toBe(0);
});

test('Step 1: one number returns itself', () => {
  expect(calculator.add("5")).toBe(5);
});

test('Step 1: two numbers are added', () => {
  expect(calculator.add("1,2")).toBe(3);
});

// ============ handle multiple numbers ============= \\
test('Step 2: handle multiple numbers', () => {
  expect(calculator.add("1,2,3,4")).toBe(10);
});

// ============ handle newlines as delimiters ============= \\
test('Step 3: handle newlines as delimiters', () => {
  expect(calculator.add("1\n2,3")).toBe(6);
});

// ============ support custom delimiter ============= \\
test('Step 4: support custom delimiter', () => {
  expect(calculator.add("//;\n1;2")).toBe(3);
});

// ============ throws on negatives ============= \\
test('Step 5/6: throws on negatives', () => {
  expect(() => calculator.add("1,-2,-3")).toThrow("negatives not allowed: -2,-3");
});