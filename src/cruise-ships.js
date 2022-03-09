class Ship {
  constructor(currentPort) {
    this.currentPort = currentPort;
  }

  sailShip() {
    this.currentPort = false;
  }
  dockAtPort() {}
}
class Port {
  constructor(portName) {
    this.name = portName;
  }
}

module.exports = { Ship, Port };
