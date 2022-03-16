class Port {
  constructor(port) {
    this.portName = port;
    this.ships = [];
  }
  addShip(ship) {
    this.ships.push(ship.name);
  }
}
module.exports = Port;
