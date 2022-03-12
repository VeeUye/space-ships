class Ship {
  constructor(currentPort) {
    this.currentPort = currentPort;
  }

  sailShip() {
    this.currentPort = false;
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
    this.ports = true;
  }
}

module.exports = { Ship, Port, Itinerary };
