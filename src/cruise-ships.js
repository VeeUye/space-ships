class Ship {
  constructor(currentPort) {
    this.currentPort = currentPort;
  }

  sailShip() {
    this.currentPort = false;
  }
  dockAtPort(port) {
    this.currentPort = port.name;
  }
}
class Port {
  constructor(portName) {
    this.name = portName;
  }
}

module.exports = { Ship, Port };
