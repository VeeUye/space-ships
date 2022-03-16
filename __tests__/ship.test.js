const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

let ceresStation;
let medinaStation;
let itinerary;
let ship;

describe("ship class", () => {
  beforeEach(() => {
    ceresStation = new Port("Ceres Station");
    medinaStation = new Port("Medina Station");
    itinerary = new Itinerary([ceresStation, medinaStation]);
    ship = new Ship(itinerary);
  });
  it("can be instatiated", () => {
    expect(ship.itinerary.ports).toBeInstanceOf(Array);
    expect(ship.currentPort).toEqual(ceresStation);
    expect(ship).toHaveProperty("currentPort");
    expect(ship.previousPort).toBeNull();
  });

  it("gets added to port on instatiation", () => {
    expect(ship.currentPort.ships).toContain(ship);
  });

  it("has a starting port", () => {
    expect(ship.currentPort).toBe(ceresStation);
  });

  it("sets ship sailing", () => {
    expect(ship.sail).toBeInstanceOf(Function);

    ship.sail();
    expect(ship.previousPort).toEqual(ceresStation);
    expect(ship.previousPort.ships).not.toContain(ship);
  });

  it("can dock at a different port", () => {
    expect(ship.dock).toBeInstanceOf(Function);
    ship.sail();
    ship.dock();
    expect(ship.currentPort).toBe(medinaStation);
    expect(ship.currentPort.ships).toContain(ship);
  });

  it("it can't sail past the last port in itinerary", () => {
    ship.sail();
    ship.dock();
    expect(() => ship.sail()).toThrowError(
      "You've sailed off the edge of the world and it's turtles all the way down"
    );
  });
});
