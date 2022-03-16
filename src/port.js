class Port {
  constructor(port) {
    this.portName = port;
    this.ships = [];
  }
  addShip(ship) {
    this.ships.push(ship);
  }
  removeShip(ship) {
    this.ships = this.ships.filter((el) => el !== ship);
  }
}
module.exports = Port;
