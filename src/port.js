(function exportPort() {
  class Port {
    constructor(port) {
      this.portName = port;
      this.ships = [];
    }
    addShip(ship) {
      this.ships.push(ship);
    }
    removeShip(ship) {
      this.ships = this.ships.filter((dockedShip) => dockedShip !== ship);
    }
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
})();

// module.exports = Port;

// new Port()
