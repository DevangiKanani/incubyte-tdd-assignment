import { StringCalculator } from '../src/stringCalculator';

let calculator: StringCalculator;

beforeEach(() => {
  calculator = new StringCalculator();
});

test('Step 1: empty string returns 0', () => {
  expect(calculator.add("")).toBe(0);
});

test('Step 1: one number returns itself', () => {
  expect(calculator.add("5")).toBe(5);
});

test('Step 1: two numbers are added', () => {
  expect(calculator.add("1,2")).toBe(3);
});