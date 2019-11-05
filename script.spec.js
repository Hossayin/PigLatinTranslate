const scriptExports = require("./script");

const { translate, pig, cons } = scriptExports;

// a describe block groups together tests for a specific feature
describe("translaste to pig latin", function() {
  // a single test case
  it("makes any string all lower case", function() {
    // call the function we want to test (add)
    let result = translate("Hello");
    // assert (or check) that the result is what it's supposed to be
    expect(result).toBe("hello");
  });
  it("add way to end if first letter in str is a vowel", function() {
    // call the function we want to test (add)
    let result = pig("Aarrow");
    // assert (or check) that the result is what it's supposed to be
    expect(result).toBe("aarrowway");
  });
  it("find vowel in the full word", function() {
    // call the function we want to test (add)
    let result = cons("Then");
    // assert (or check) that the result is what it's supposed to be
    expect(result).toBe("enthay");
  });

  //   it("add with a negative and zero", function() {
  //     let result = add(-2, 0);
  //     expect(result).toBe(-2);
  //   });

  //   it("adds two negatives", function() {
  //     let result = add(-10, -40);
  //     expect(result).toBe(-50);
  //   });
});
