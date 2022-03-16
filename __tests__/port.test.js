// const { Ship, Port, Itinerary } = require("../src/cruise-ships");

const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

let tychoStation;

describe("port class", () => {
  beforeEach(() => {
    tychoStation = new Port("Tycho Station");
  });
  // const port = new Port("The Belt");
  it("instantiates a port", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it("port has a name", () => {
    expect(tychoStation.portName).toBe("Tycho Station");
  });
});
