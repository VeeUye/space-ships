const Ship = require("../src/cruise-ships");

describe("constructor", () => {
  const ship = new Ship("Manchester");
  it("returns an object", () => {
    expect(new Ship()).toBeInstanceOf(Object);
    expect(ship.homePort).toBe("Manchester");
    expect(ship.homePort).toBeTruthy();
  });
});

describe("sail", () => {
  const ship = new Ship("Manchester");
  it("sets ship sailing", () => {
    expect(ship.sail).toBeInstanceOf(Function);
  });
  ship.sail();
  expect(ship.homePort).toBeFalsy();
});
