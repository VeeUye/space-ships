const { Ship, Port, Itinerary } = require("../src/cruise-ships");

describe("Ship", () => {
  const port = new Port("Manchester");
  const ship = new Ship(itinerary);
  const itinerary = new Itinerary();
  it("instantiates a ship", () => {
    expect(new Ship()).toBeInstanceOf(Object);
    expect(ship.currentPort).toBe(port);
    expect(ship).toHaveProperty("currentPort");
    expect(ship.previousPort).toBeNull();
  });
});

describe("sailing", () => {
  const port = new Port("Manchester");
  const ship = new Ship(port);
  it("sets ship sailing", () => {
    expect(ship.sailShip).toBeInstanceOf(Function);
  });
  ship.sailShip();
  expect(ship.previousPort).toEqual(ship.currentPort);
});

describe("docking", () => {
  const port = new Port("Manchester");
  const ship = new Ship(port);
  it("can dock at a different port", () => {
    expect(ship.dockAtPort).toBeInstanceOf(Function);

    const newOrleans = new Port("New Orleans");
    ship.dockAtPort(newOrleans);
    expect(ship.currentPort).toBe(newOrleans);
  });
});
