// const { Ship, Port, Itinerary } = require("../src/cruise-ships");
const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

it("can be instatiated", () => {
  const ceresStation = new Port("Ceres Station");
  const medinaStation = new Port("Medina Station");
  const itinerary = new Itinerary([ceresStation, medinaStation]);
  const ship = new Ship(itinerary);
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

it("sets ship sailing", () => {
  const ceresStation = new Port("Ceres Station");
  const medinaStation = new Port("Medina Station");
  const itinerary = new Itinerary([ceresStation, medinaStation]);
  const ship = new Ship(itinerary);
  expect(ship.sailShip).toBeInstanceOf(Function);

  ship.sailShip();
  expect(ship.previousPort).toEqual(ceresStation);
});
// });

// describe("docking", () => {

it("can dock at a different port", () => {
  const ceresStation = new Port("Ceres Station");
  const medinaStation = new Port("Medina Station");
  const itinerary = new Itinerary([ceresStation, medinaStation]);
  const ship = new Ship(itinerary);
  expect(ship.dockAtPort).toBeInstanceOf(Function);
  ship.sailShip();
  ship.dockAtPort();
  expect(ship.currentPort).toBe(medinaStation);
});
