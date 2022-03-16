class Port {
  constructor(port) {
    this.portName = port;
    this.ships = [];
  }
  addShip(ship) {
    this.ships.push(ship);
  }
}
module.exports = Port;
