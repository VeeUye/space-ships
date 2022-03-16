// const { Ship, Port, Itinerary } = require("../src/cruise-ships");
const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

let newTerra;
let ilus;
let itinerary;

describe("Itinerary", () => {
  beforeEach(() => {
    // newTerra = new Port("New Terra");
    // ilus = new Port("Ilus");
    newTerra = jest.fn();
    ilus = jest.fn();
    itinerary = new Itinerary([newTerra, ilus]);
  });

  it("instantiates an itinerary", () => {
    expect(itinerary).toBeInstanceOf(Object);
    expect(itinerary).toHaveProperty("ports");
  });

  it("has an array of two ports", () => {
    expect(itinerary.ports).toEqual([newTerra, ilus]);
  });
});
