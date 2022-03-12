const { Ship, Port, Itinerary } = require("../src/cruise-ships");

describe("Itineray", () => {
  const itinerary = new Itinerary();
  it("instantiates an itinerary", () => {
    expect(itinerary).toBeInstanceOf(Object);
    expect(itinerary).toHaveProperty("ports");
  });
});
