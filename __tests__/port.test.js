// const { Ship, Port, Itinerary } = require("../src/cruise-ships");

const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

describe("constructor", () => {
  const port = new Port("The Belt");
  it("instantiates a port", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it("port has a name", () => {
    expect(port.portName).toBe("The Belt");
  });
});
