// const { Ship, Port, Itinerary } = require("../src/cruise-ships");
const Ship = require("../src/ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");
let ship;

describe("Class Ship", () => {
  beforeEach(() => {
    const ceresStation = new Port("Ceres Station");
    const medinaStation = new Port("Medina Station");
    const itinerary = new Itinerary([ceresStation, medinaStation]);
    const ship = new Ship(itinerary);
  });
  describe("Ship constructor", () => {
    it("instantiates a ship", () => {
      const ceresStation = new Port("Ceres Station");
      const medinaStation = new Port("Medina Station");
      const itinerary = new Itinerary([ceresStation, medinaStation]);
      const ship = new Ship(itinerary);

      // expect(new Ship()).toBeInstanceOf(Object);
      expect(ship.itinerary.ports).toBeInstanceOf(Array);
      expect(ship.currentPort).toEqual(ceresStation);
      expect(ship).toHaveProperty("currentPort");
      expect(ship.previousPort).toBeNull();
    });
  });

  describe("sailing", () => {
    const ceresStation = new Port("Ceres Station");
    const medinaStation = new Port("Medina Station");
    const itinerary = new Itinerary([ceresStation, medinaStation]);
    const ship = new Ship(itinerary);

    it("sets ship sailing", () => {
      expect(ship.sailShip).toBeInstanceOf(Function);

      ship.sailShip();
      expect(ship.previousPort).toEqual(ship.currentPort);
    });
  });

  describe("docking", () => {
    const ceresStation = new Port("Ceres Station");
    const medinaStation = new Port("Medina Station");
    const itinerary = new Itinerary([ceresStation, medinaStation]);
    const ship = new Ship(itinerary);

    it("can dock at a different port", () => {
      expect(ship.dockAtPort).toBeInstanceOf(Function);
      ship.dockAtPort();
      expect(ship.currentPort).toBe(medinaStation);
      console.log(ship.currentPort);
    });

    // it("can dock at a different port", () => {
    //   expect(ship.dockAtPort).toBeInstanceOf(Function);
    //   ship.dockAtPort(medinaStation);
    //   expect(ship.currentPort).toBe(medinaStation);
    // });
  });
});
