const Ship = require("../src/cruise-ships");

describe("constructor", () => {
  const ship = new Ship("Manchester");
  it("returns an object", () => {
    expect(new Ship()).toBeInstanceOf(Object);
    expect(ship.origin).toBe("Manchester");
  });
});
