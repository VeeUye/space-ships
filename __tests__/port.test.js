const { Ship, Port } = require("../src/cruise-ships");

describe("constructor", () => {
  const port = new Port("Todmorden");
  it("instantiates a port", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it("port has a name", () => {
    expect(port.portName).toBe("Todmorden");
  });
});
