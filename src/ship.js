class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    console.log(this.currentPort);
  }

  sailShip() {
    this.previousPort = this.currentPort;
  }

  dockAtPort(port) {
    this.currentPort = port;
  }
}
module.exports = Ship;
