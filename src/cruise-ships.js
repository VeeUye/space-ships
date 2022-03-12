// class Port {
//   constructor(port) {
//     this.portName = port;
//   }
// }

// class Itinerary {
//   constructor(ports) {
//     this.ports = ports;
//   }
// }

// class Ship {
//   constructor(itinerary) {
//     this.itinerary = itinerary;
//     this.currentPort = itinerary.ports;
//     this.previousPort = null;
//     // console.log("itinerary", itinerary);
//     // console.log("itinerary.ports", itinerary.ports);
//   }

//   sailShip() {
//     this.previousPort = this.currentPort;
//   }

//   dockAtPort(port) {
//     this.currentPort = port;
//   }
// }

// module.exports = { Ship, Port, Itinerary };
