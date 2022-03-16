// const { Ship, Port, Itinerary } = require("../src/cruise-ships");

const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

let tychoStation;
let gannymede;
let rocinante;
let scopuli;

describe("port class", () => {
  beforeEach(() => {
    tychoStation = new Port("Tycho Station");
    gannymede = new Port("Gannymede");
    rocinante = jest.fn();
    scopuli = jest.fn();
  });

  it("instantiates a port", () => {
    expect(new Port(tychoStation)).toBeInstanceOf(Object);
  });

  it("port has a name", () => {
    expect(tychoStation.portName).toBe("Tycho Station");
  });

  it("it can add ships", () => {
    tychoStation.ships = [];
    expect(tychoStation.ships).toBeInstanceOf(Array);
    expect(tychoStation.ships).toEqual([]);
    expect(tychoStation.addShip).toBeInstanceOf(Function);

    tychoStation.addShip(rocinante);
    expect(tychoStation.ships).toHaveLength(1);
    expect(tychoStation.ships).toEqual([rocinante]);
  });

  it("can remove ships", () => {
    tychoStation.ships = [];
    expect(tychoStation.removeShip).toBeInstanceOf(Function);

    tychoStation.addShip(rocinante);
    expect(tychoStation.ships).toHaveLength(1);
    expect(tychoStation.ships).toEqual([rocinante]);

    tychoStation.removeShip(rocinante);
    expect(tychoStation.ships).toEqual([]);

    tychoStation.addShip(rocinante);
    tychoStation.addShip(scopuli);
    expect(tychoStation.ships).toEqual([rocinante, scopuli]);

    tychoStation.removeShip(rocinante);
    expect(tychoStation.ships).toEqual([scopuli]);
  });
});
