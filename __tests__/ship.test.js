// const { Ship, Port, Itinerary } = require("../src/cruise-ships");
const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

describe("Ship constructor", () => {
  const ceresStation = new Port("Ceres Station");
  const medinaStation = new Port("Medina Station");
  const itinerary = new Itinerary([ceresStation, medinaStation]);
  const ship = new Ship(itinerary);

  it("instantiates a ship", () => {
    expect(ship.itinerary.ports).toBeInstanceOf(Array);
    expect(ship.currentPort).toEqual(ceresStation);
    expect(ship).toHaveProperty("currentPort");
    expect(ship.previousPort).toBeNull();
  });

  it("has a starting port", () => {
    const ceresStation = new Port("Ceres Station");
    const medinaStation = new Port("Medina Station");
    const itinerary = new Itinerary([ceresStation, medinaStation]);
    const ship = new Ship(itinerary);

    expect(ship.currentPort).toBe(ceresStation);
  });
});

describe("sailing", () => {
  const ceresStation = new Port("Ceres Station");
  const medinaStation = new Port("Medina Station");
  const itinerary = new Itinerary([ceresStation, medinaStation]);
  const ship = new Ship(itinerary);

  it("sets ship sailing", () => {
    expect(ship.sailShip).toBeInstanceOf(Function);

    ship.sailShip();
    expect(ship.previousPort).toEqual(ceresStation);
  });
});

describe("docking", () => {
  const ceresStation = new Port("Ceres Station");
  const medinaStation = new Port("Medina Station");
  const itinerary = new Itinerary([ceresStation, medinaStation]);
  const ship = new Ship(itinerary);

  it("can dock at a different port", () => {
    expect(ship.dockAtPort).toBeInstanceOf(Function);
    ship.sailShip();
    ship.dockAtPort();
    expect(ship.currentPort).toBe(medinaStation);
  });

  // it("can dock at a different port", () => {
  //   expect(ship.dockAtPort).toBeInstanceOf(Function);
  //   ship.dockAtPort(medinaStation);
  //   expect(ship.currentPort).toBe(medinaStation);
  // });
});
