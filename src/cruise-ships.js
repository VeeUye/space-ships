class Ship {
  constructor(homePort) {
    this.homePort = homePort;
  }

  sail() {
    this.homePort = false;
  }
}
class Port {
  constructor(portName) {
    this.name = portName;
  }
}

module.exports = { Ship, Port };
