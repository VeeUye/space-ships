class Ship {
  constructor(homePort) {
    this.homePort = homePort;
    this.dockedAtHomePort = true;
  }

  sail() {
    this.dockedAtHomePort = false;
  }
}

module.exports = Ship;
