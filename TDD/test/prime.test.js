const prime = require("../src/prime");

describe("Testcases for given number is prime or not ", () => {
  test("it should return true if given number is prime number ", () => {
    const result = prime.isPrime(2);
    expect(result).toBe(true);
  });

  test("it should return false if given number is not prime ", () => {
    const result = prime.isPrime(6);
    expect(result).toBe(false);
  });

  test("it should return false if input 15 ", () => {
    const result = prime.isPrime(15);
    expect(result).toBe(false);
  });
});
