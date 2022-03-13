class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
  }

  sail() {
    this.previousPort = this.currentPort;
    this.currentPort = null;
  }
  // previously passed in port into dock
  dock() {
    let nextPortIndex = this.itinerary.ports.indexOf(this.previousPort);
    if (nextPortIndex >= 0 && nextPortIndex < this.itinerary.ports.length - 1)
      this.currentPort = this.itinerary.ports[nextPortIndex + 1];
  }
}
module.exports = Ship;
