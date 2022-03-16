class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
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
    let nextPortIndex = this.itinerary.ports.indexOf(this.previousPort);
    if (nextPortIndex >= 0 && nextPortIndex < this.itinerary.ports.length - 1)
      this.currentPort = this.itinerary.ports[nextPortIndex + 1];
  }
}
module.exports = Ship;
