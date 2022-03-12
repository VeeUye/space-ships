const { Ship, Port, Itinerary } = require("../src/cruise-ships");

describe("constructor", () => {
  const port = new Port("Manchester");
  const ship = new Ship(port);
  it("instantiates a ship", () => {
    expect(new Ship()).toBeInstanceOf(Object);
    expect(ship.currentPort).toBe(port);
    expect(ship.currentPort).toBeTruthy();
  });
});

describe("sailing", () => {
  const port = new Port("Manchester");
  const ship = new Ship(port);
  it("sets ship sailing", () => {
    expect(ship.sailShip).toBeInstanceOf(Function);
  });
  ship.sailShip();
  expect(ship.currentPort).toBeFalsy();
});

describe("docking at a port", () => {
  const port = new Port("Manchester");
  const ship = new Ship(port);
  expect(ship.dockAtPort).toBeInstanceOf(Function);

  const newOrleans = new Port("New Orleans");
  ship.dockAtPort(newOrleans);
  expect(ship.currentPort).toBe(newOrleans);
});
