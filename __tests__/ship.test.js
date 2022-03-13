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
  expect(ship.sail).toBeInstanceOf(Function);

  ship.sail();
  expect(ship.previousPort).toEqual(ceresStation);
});

it("can dock at a different port", () => {
  const ceresStation = new Port("Ceres Station");
  const medinaStation = new Port("Medina Station");
  const itinerary = new Itinerary([ceresStation, medinaStation]);
  const ship = new Ship(itinerary);
  expect(ship.dock).toBeInstanceOf(Function);
  ship.sail();
  ship.dock();
  expect(ship.currentPort).toBe(medinaStation);
});

it("it can't sail past the last port in itinerary", () => {
  const ceresStation = new Port("Ceres Station");
  const medinaStation = new Port("Medina Station");
  const itinerary = new Itinerary([ceresStation, medinaStation]);
  const ship = new Ship(itinerary);
  ship.sail();
  ship.dock();
  expect(() => ship.sail()).toThrowError(
    "You've sailed off the edge of the world and it's turtles all the way down"
  );
});
