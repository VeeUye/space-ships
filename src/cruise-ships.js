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

// export { Ship, Port };
(module.exports = Ship), Port;
