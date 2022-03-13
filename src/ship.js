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
  // previously passed in port into dockAtPort
  dockAtPort() {
    let nextPortIndex = this.itinerary.ports.indexOf(this.currentPort);
    if (nextPortIndex >= 0 && nextPortIndex < this.itinerary.ports.length - 1)
      this.currentPort = this.itinerary.ports[nextPortIndex + 1];
  }
}
module.exports = Ship;
