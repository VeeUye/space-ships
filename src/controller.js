(function exportController() {
  class Controller {
    constructor(ship) {
      this.initialiseSea();
      this.ship = ship;

      // sailbutton timeout
      const sailButton = document.querySelector("#sailbutton");
      sailButton.onclick = function () {
        sailButton.disabled = true;
        setTimeout(function () {
          sailButton.disabled = false;
        }, 5000);
      };

      //sailbutton eventlistener
      document.querySelector("#sailbutton").addEventListener("click", () => {
        this.sail();
      });
    }

    //render background
    initialiseSea() {
      const backgrounds = [
        "./images/space-background-big01.png",
        "./images/space-background-big02.png"
      ];
      let backgroundIndex = 0;
      window.setInterval(() => {
        document.querySelector("#viewport").style.backgroundImage = `url("${
          backgrounds[backgroundIndex % backgrounds.length]
        }")`;
        backgroundIndex += 1;
      }, 1000);
    }

    //render initial HUD message
    initialiseHUD() {
      if (ship.itinerary.ports.length === 0) {
        const initialHUD = document.getElementById("port-status");
        initialHUD.innerHTML = "Waiting for flight plan...";
      }
    }

    //render ship in relation to port/s
    renderShip() {
      const shipPortIndex = this.ship.itinerary.ports.indexOf(
        this.ship.currentPort
      );
      const portElement = document.querySelector(
        `[data-port-index='${shipPortIndex}']`
      );
      const shipElement = document.querySelector("#ship");
      shipElement.style.top = `${portElement.offsetTop + 70}px`;
      shipElement.style.left = `${portElement.offsetLeft - 15}px`;
    }

    //render ports from input array
    renderPorts() {
      const portsElement = document.querySelector("#ports");
      portsElement.style.width = "0px";
      //clear ports and rerender array to prevent duplicates
      if (portsElement.hasChildNodes()) {
        while (portsElement.firstChild) {
          portsElement.removeChild(portsElement.lastChild);
        }
      }
      //renders the ports
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

    //function updates the port-status div on dock()
    renderPortStatus(journeyUpdate) {
      const portStatus = document.querySelector("#port-status");
      portStatus.innerHTML = journeyUpdate;
    }
    //updates the message box
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

    // function launches ship
    sail() {
      const ship = this.ship;
      const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = currentPortIndex + 1;
      const nextPortElement = document.querySelector(
        `[data-port-index='${nextPortIndex}']`
      );

      const initialHUD = document.getElementById("port-status");
      initialHUD.innerHTML = "Approaching destination...";

      if (!nextPortElement) {
        return this.renderMessage(
          `The universe is a big place, but this is as far as you can go.`
        );
      }

      this.renderMessage(
        `Buckle up, Bunnies! We're now departing ${ship.currentPort.portName}`
      );

      const shipElement = document.querySelector("#ship");
      const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);

        if (shipLeft === nextPortElement.offsetLeft - 15) {
          ship.sail();
          ship.dock();

          //scroll ship into view
          const shipFocus = document.getElementById("ship");
          shipFocus.scrollIntoView();

          if (currentPortIndex === ship.itinerary.ports.length - 2) {
            this.renderPortStatus(
              `${ship.currentPort.portName}: end of the line`
            );
          } else {
            this.renderPortStatus(
              `Current Port: ${ship.currentPort.portName}\n\Next Port: ${
                ship.itinerary.ports[currentPortIndex + 2].portName
              }`
            );
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
