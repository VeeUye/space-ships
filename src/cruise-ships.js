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

module.exports = { Ship, Port };
