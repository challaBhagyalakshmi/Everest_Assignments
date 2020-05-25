const fizzbuzz = require("../src/fizzbuzz");

describe("Testcases for FizzBuzz ", () => {
  test("it should return fizz if num is divisible by 3 ", () => {
    const result = fizzbuzz.fizzbuzz(9);
    expect(result).toBe("Fizz");
  });

  test("it should return buzz if num is divisible by 5 ", () => {
    const result = fizzbuzz.fizzbuzz(10);
    expect(result).toBe("Buzz");
  });

  test("it should return fizzbuzz if num is divisible by both 3 and 5", () => {
    const result = fizzbuzz.fizzbuzz(15);
    expect(result).toBe("FizzBuzz");
  });

  test("it should return number if number is not divisible by both 3 and 5 ", () => {
    const result = fizzbuzz.fizzbuzz(2);
    expect(result).toBe(2);
  });
});
