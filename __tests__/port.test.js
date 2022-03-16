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
    rocinante = new Ship(itinerary, "Rocinante");
    scopuli = new Ship(itinerary, "Scopuli");
  });
  it("instantiates a port", () => {
    expect(new Port(tychoStation)).toBeInstanceOf(Object);
    console.log(tychoStation.ships);
  });
  it("port has a name", () => {
    expect(tychoStation.portName).toBe("Tycho Station");
  });
  it("it can add ships", () => {
    tychoStation.ships = [];
    expect(tychoStation.ships).toBeInstanceOf(Array);
    expect(tychoStation.ships).toEqual([]);
    expect(tychoStation.addShip).toBeInstanceOf(Function);
    expect(tychoStation.removeShip).toBeInstanceOf(Function);
    tychoStation.addShip(rocinante);
    expect(tychoStation.ships).toHaveLength(1);
    expect(tychoStation.ships).toEqual([rocinante.name]);
  });
  it("can remove ships", () => {
    tychoStation.ships = [];
    tychoStation.addShip(rocinante);
    expect(tychoStation.ships).toHaveLength(1);
    expect(tychoStation.ships).toEqual([rocinante.name]);
    tychoStation.removeShip(rocinante);
    expect(tychoStation.ships).toEqual([]);
    tychoStation.addShip(rocinante);
    tychoStation.addShip(scopuli);
    expect(tychoStation.ships).toEqual([rocinante.name, scopuli.name]);
    tychoStation.removeShip(rocinante);
    expect(tychoStation.ships).toEqual([scopuli.name]);
    console.log(tychoStation.ships);
  });
});
