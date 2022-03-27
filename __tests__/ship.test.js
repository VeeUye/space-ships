const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

let ceresStation;
let medinaStation;
let itinerary;
let ship;

describe("ship class", () => {
  beforeEach(() => {
    ceresStation = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: "Ceres Station",
      ships: []
    };

    medinaStation = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: "Medina Station",
      ships: []
    };

    itinerary = {
      ports: [ceresStation, medinaStation]
    };
    ship = new Ship(itinerary);
  });
  it("can be instatiated", () => {
    expect(ship.itinerary.ports).toBeInstanceOf(Array);
    expect(ship.currentPort).toEqual(ceresStation);
    expect(ship).toHaveProperty("currentPort");
    expect(ship.previousPort).toBeNull();
  });

  it("sets ship sailing", () => {
    expect(ship.sail).toBeInstanceOf(Function);

    ship.sail();
    expect(ship.previousPort).toEqual(ceresStation);
    expect(ceresStation.removeShip).toHaveBeenCalledWith(ship);
  });

  it("can dock at a different port", () => {
    expect(ship.dock).toBeInstanceOf(Function);
    ship.sail();
    ship.dock();
    expect(ship.currentPort).toBe(medinaStation);
    expect(medinaStation.addShip).toHaveBeenCalledWith(ship);
  });

  it("it can't sail past the last port in itinerary", () => {
    ship.sail();
    ship.dock();
    expect(() => ship.sail()).toThrowError(
      "The universe is a big place, but this is as far as you can go."
    );
  });
});
