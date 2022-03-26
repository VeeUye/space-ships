(function exportShip() {
  class Ship {
    constructor(itinerary) {
      this.itinerary = itinerary;
      this.currentPort = itinerary.ports[0];
      this.previousPort = null;
      // this.currentPort.addShip(this);
    }

    sail() {
      if (
        this.currentPort ===
        this.itinerary.ports[this.itinerary.ports.length - 1]
      ) {
        throw new Error(
          "You've sailed off the edge of the world and it's turtles all the way down"
        );
      }
      this.previousPort = this.currentPort;
      this.previousPort.removeShip(this);
      this.currentPort = null;
    }

    dock() {
      const previousPortIndex = this.itinerary.ports.indexOf(this.previousPort);
      this.currentPort = this.itinerary.ports[previousPortIndex + 1];
      this.currentPort.addShip(this);
    }
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Ship;
  } else {
    window.Ship = Ship;
  }
})();
