const { Ship, Port } = require("../src/cruise-ships");

describe("constructor", () => {
  const port = new Port("Manchester");
  const ship = new Ship(port.name);
  it("instantiates a ship", () => {
    expect(new Ship()).toBeInstanceOf(Object);
    expect(ship.currentPort).toBe("Manchester");
    expect(ship.currentPort).toBeTruthy();
  });
});

describe("sailing", () => {
  const ship = new Ship("Manchester");
  it("sets ship sailing", () => {
    expect(ship.sailShip).toBeInstanceOf(Function);
  });
  ship.sailShip();
  expect(ship.currentPort).toBeFalsy();
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

describe("docking at a port", () => {
  const ship = new Ship("Manchester");
  expect(ship.dockAtPort).toBeInstanceOf(Function);
});
