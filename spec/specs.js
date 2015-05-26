describe('triangle', function() {
  it("check to see if it is a triangle", function() {
    expect(triangle(1, 1, 2)).to.equal("not a triangle");
  });
  it("checks to see if it an equilateral triangle", function() {
    expect(triangle(2, 2, 2)).to.equal("equilateral");
  });
  it("checks to see if it an isoceles triangle", function() {
    expect(triangle(2, 2, 1)).to.equal("isoceles");
  });
  it("checks to see if it is an scalene triangle", function() {
    expect(triangle(2,3,4)).to.equal("scalene");
  });
});
