const { Ship, Port, Itinerary } = require("../src/cruise-ships");

describe("Ship", () => {
  const ceresStation = new Port("Ceres Station");
  const medinaStation = new Port("MedinaStation");
  const itinerary = new Itinerary(ceresStation, medinaStation);
  const ship = new Ship(itinerary);
  it("instantiates a ship", () => {
    expect(new Ship()).toBeInstanceOf(Object);
    expect(ship.currentPort).toBeNull();
    expect(ship).toHaveProperty("currentPort");
    expect(ship.previousPort).toBeNull();
    console.log(ship.currentPort);
  });
});

describe("sailing", () => {
  const port = new Port("Earth");
  const ship = new Ship(port);
  it("sets ship sailing", () => {
    expect(ship.sailShip).toBeInstanceOf(Function);
  });
  ship.sailShip();
  expect(ship.previousPort).toEqual(ship.currentPort);
});

describe("docking", () => {
  const port = new Port("Earth");
  const ship = new Ship(port);
  it("can dock at a different port", () => {
    expect(ship.dockAtPort).toBeInstanceOf(Function);

    const mars = new Port("Mars");
    ship.dockAtPort(mars);
    expect(ship.currentPort).toBe(mars);
  });
});
