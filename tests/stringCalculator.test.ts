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

// ============ throws on negatives ============= \\
test('Step 7: track number of calls', () => {
  calculator.add("1");
  calculator.add("2");
  expect(calculator.getCalledCount()).toBe(2);
});

// ============ AddOccurred event is triggered with correct input and result ============= \\
test('Step 8: AddOccurred event is triggered with correct input and result', () => {
  const calc = new StringCalculator();

  let capturedInput: string | null = null;
  let capturedResult: number | null = null;

  calc.onAddOccurred((input, result) => {
      capturedInput = input;
      capturedResult = result;
  });

  const result = calc.add("1,2,3");

  expect(capturedInput).toBe("1,2,3");
  expect(capturedResult).toBe(result);
});

// ============ ignore numbers > 1000 ============= \\
test('Step 9: ignore numbers > 1000', () => {
  expect(calculator.add("2,1001")).toBe(2);
});

// ============ delimiter of any length ============= \\
test('Step 10: delimiter of any length', () => {
  expect(calculator.add("//[***]\n1***2***3")).toBe(6);
});