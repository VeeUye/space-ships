class Ship {
  constructor(itinerary, shipName) {
    this.name = shipName;
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.currentPort.addShip(this);
  }

  sail() {
    if (
      this.currentPort === this.itinerary.ports[this.itinerary.ports.length - 1]
    ) {
      throw new Error(
        "You've sailed off the edge of the world and it's turtles all the way down"
      );
    }
    this.previousPort = this.currentPort;
    this.currentPort = null;
  }

  dock() {
    let previousPortIndex = this.itinerary.ports.indexOf(this.previousPort);
    this.currentPort = this.itinerary.ports[previousPortIndex + 1];
  }
}
module.exports = Ship;
