class Port {
  constructor(port) {
    this.portName = port;
    this.ships = [];
  }
  addShip(ship) {
    this.ships.push(ship.name);
  }
  removeShip(ship) {
    this.ships = this.ships.filter((el) => el !== ship.name);
  }
}
module.exports = Port;
