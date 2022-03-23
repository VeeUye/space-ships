(function exportController() {
  class Controller {
    constructor(ship) {
      this.initialiseSea();
      this.ship = ship;

      document.querySelector("#sailbutton").addEventListener("click", () => {
        this.sail();
      });
    }
    initialiseSea() {
      const backgrounds = ["./images/water0.png", "./images/water1.png"];
      let backgroundIndex = 0;
      window.setInterval(() => {
        document.querySelector("#viewport").style.backgroundImage = `url("${
          backgrounds[backgroundIndex % backgrounds.length]
        }")`;
        backgroundIndex += 1;
      }, 1000);
    }

    renderShip() {
      const shipPortIndex = this.ship.itinerary.ports.indexOf(
        this.ship.currentPort
      );
      const portElement = document.querySelector(
        `[data-port-index='${shipPortIndex}']`
      );
      const shipElement = document.querySelector("#ship");
      shipElement.style.top = `${portElement.offsetTop + 30}px`;
      shipElement.style.left = `${portElement.offsetLeft - 43}px`;
    }

    renderPorts() {
      const portsElement = document.querySelector("#ports");
      portsElement.style.width = "0px";
      this.ship.itinerary.ports.forEach((port, index) => {
        const newPortElement = document.createElement("div");
        newPortElement.className = "port";
        newPortElement.dataset.portName = port.name;
        newPortElement.dataset.portIndex = index;
        portsElement.appendChild(newPortElement);
        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 256}px`;
      });
    }

    renderPortStatus(journeyUpdate) {
      const portStatus = document.querySelector("#port-status");
      portStatus.innerHTML = journeyUpdate;
    }

    renderMessage(message) {
      const messageBox = document.createElement("div");
      messageBox.id = "message";
      messageBox.innerHTML += message;
      const viewport = document.querySelector("#viewport");
      viewport.appendChild(messageBox);

      setTimeout(() => {
        viewport.removeChild(messageBox);
      }, 2000);
    }

    sail() {
      const ship = this.ship;
      const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = currentPortIndex + 1;
      const nextPortElement = document.querySelector(
        `[data-port-index='${nextPortIndex}']`
      );
      // console.log(ship.itinerary.ports[currentPortIndex + 1].portName);

      if (!nextPortElement) {
        return this.renderMessage(
          `You've sailed off the edge of the world and it's turtles all the way down`
        );
      }

      this.renderMessage(
        `Buckle up, Bunnies! We're now departing ${ship.currentPort.portName}`
      );

      const shipElement = document.querySelector("#ship");
      const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);
        if (shipLeft === nextPortElement.offsetLeft - 32) {
          ship.sail();
          ship.dock();

          if (currentPortIndex === ship.itinerary.ports.length - 2) {
            this.renderPortStatus(`End of the line`);
          } else {
            this.renderPortStatus(`Current Port: ${ship.currentPort.portName}
            Next Port: ${ship.itinerary.ports[currentPortIndex + 2].portName}`);
          }

          this.renderMessage(
            `Gather your stuff. We've arrived at ${ship.currentPort.portName}`
          );
          clearInterval(sailInterval);
        }
        shipElement.style.left = `${shipLeft + 1}px`;
      }, 20);
    }
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
