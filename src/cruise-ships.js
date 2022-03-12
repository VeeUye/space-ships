class Ship {
  constructor(currentPort) {
    this.currentPort = currentPort;
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
  constructor() {
    this.ports = [];
  }
}

module.exports = { Ship, Port, Itinerary };
