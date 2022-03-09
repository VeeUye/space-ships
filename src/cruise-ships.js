class Ship {
  constructor(homePort) {
    this.homePort = homePort;
  }

  sail() {
    this.homePort = false;
  }
}

module.exports = Ship;
