// const { Ship, Port, Itinerary } = require("../src/cruise-ships");

const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

let tychoStation;
let gannymede;
let ship;
let itinerary;

describe("port class", () => {
  beforeEach(() => {
    tychoStation = new Port("Tycho Station");
    gannymede = new Port("Gannymede");
    itinerary = new Itinerary([tychoStation, gannymede]);
    ship = new Ship(itinerary);
  });
  it("instantiates a port", () => {
    expect(new Port(tychoStation)).toBeInstanceOf(Object);
  });
  it("port has a name", () => {
    expect(tychoStation.portName).toBe("Tycho Station");
  });
  it("it has ships", () => {
    expect(tychoStation.ships).toBeInstanceOf(Array);
    expect(tychoStation.ships).toEqual([]);
    expect(addShip).toBeInstanceOf(Function);
    addShip(ship);
    expect(tychoStation.ships).toHaveLength(1);
    expect(tychoStation.ships).toEqual([ship]);
  });
});
