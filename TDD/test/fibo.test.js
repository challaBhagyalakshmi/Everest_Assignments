const fibo = require("../src/fibo");

describe("Testcases for fibonacci series ", () => {
  test("it should return 0,1,1 if input is 3 ", () => {
    const result = fibo.main(3);
    expect(result).toEqual([0, 1, 1]);
  });

  it("it should return 0,1,1,2,3,5,8 if input is 7", () => {
    const result = fibo.main(7);
    expect(result).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });

  it("it should return not possible to find fibonacci for negative numbers ", () => {
    const result = fibo.main(-3);
    expect(result).toBe("Not possible for finding fibonacci series");
  });

  it("it should return 0 if input is 0 ", () => {
    const result = fibo.main(0);
    expect(result).toEqual([0]);
  });

  it("it should return 1 if input is 1", () => {
    const result = fibo.main(1);
    expect(result).toEqual([0]);
  });
});
