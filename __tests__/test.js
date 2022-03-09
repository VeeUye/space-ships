const { Ship, Port } = require("../src/cruise-ships");

describe("constructor", () => {
  const ship = new Ship("Manchester");
  it("instantiates a ship", () => {
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

describe("constructor", () => {
  const port = new Port("Todmorden");
  it("instantiates a port", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it("port has a name", () => {
    expect(port.name).toBe("Todmorden");
  });
});
