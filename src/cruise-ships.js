class Ship {
  constructor(itinerary) {
    this.currentPort = null;
    this.previousPort = null;
  }

  sailShip() {
    this.previousPort = this.currentPort;
  }

  dockAtPort(port) {
    this.currentPort = port;
  }
}

class Port {
  constructor(port) {
    this.portName = port;
  }
}

class Itinerary {
  constructor(port1, port2) {
    this.ports = [port1, port2];
  }
}

module.exports = { Ship, Port, Itinerary };
