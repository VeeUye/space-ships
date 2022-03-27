(function exportController() {
  class Controller {
    constructor(ship) {
      this.initialiseSea();
      this.initialiseHUD();
      this.ship = ship;

      const sailButton = document.querySelector("#sailbutton");
      sailButton.onclick = function () {
        sailButton.disabled = true;
        setTimeout(function () {
          sailButton.disabled = false;
        }, 5000);
      };

      document.querySelector("#sailbutton").addEventListener("click", () => {
        this.sail();
      });
    }

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

    initialiseHUD() {
      if (ship.itinerary.ports.length === 0) {
        const hud = document.getElementById("port-status");
        hud.innerHTML = "Waiting for flight plan...";
      }
    }

    renderShip() {
      const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const portElement = document.querySelector(
        `[data-port-index='${shipPortIndex}']`
      );
      const shipElement = document.querySelector("#ship");
      shipElement.style.top = `${portElement.offsetTop + 70}px`;
      shipElement.style.left = `${portElement.offsetLeft - 15}px`;
    }

    renderPorts() {
      const portsElement = document.querySelector("#ports");
      portsElement.style.width = "0px";

      if (portsElement.hasChildNodes()) {
        while (portsElement.firstChild) {
          portsElement.removeChild(portsElement.lastChild);
        }
      }

      ship.itinerary.ports.forEach((port, index) => {
        const newPortElement = document.createElement("div");
        newPortElement.className = "port";
        newPortElement.dataset.portName = port.name;
        newPortElement.dataset.portIndex = index;
        portsElement.appendChild(newPortElement);
        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 25}%`;
      });
    }

    updateHUD(journeyUpdate) {
      const portStatus = document.querySelector("#port-status");
      portStatus.innerHTML = journeyUpdate;
    }

    renderCrewComms(message) {
      const crewComms = document.createElement("div");
      crewComms.id = "message";
      crewComms.innerHTML += message;
      const crewCommsBox = document.querySelector("#crew-comms");
      crewCommsBox.appendChild(crewComms);

      setTimeout(() => {
        crewCommsBox.removeChild(crewComms);
      }, 3000);
    }

    sail() {
      const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = currentPortIndex + 1;
      const nextPortElement = document.querySelector(
        `[data-port-index='${nextPortIndex}']`
      );
      const hud = document.getElementById("port-status");
      if (!nextPortElement) {
        hud.innerHTML = " ";
      } else {
        hud.innerHTML = "Approaching destination...";
      }

      if (ship.itinerary.ports.length <= 0) {
        return this.renderCrewComms(
          `Add planets to visit to start your journey.`
        );
      }
      if (!nextPortElement) {
        return this.renderCrewComms(
          `The universe is a big place, but this is as far as you can go.`
        );
      }

      this.renderCrewComms(
        `Buckle up, Bunnies! We're now departing ${ship.currentPort.portName}`
      );

      const shipElement = document.querySelector("#ship");
      const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);

        if (shipLeft === nextPortElement.offsetLeft - 15) {
          ship.sail();
          document.getElementById("viewport").scrollLeft += 100;
          ship.dock();

          if (currentPortIndex === ship.itinerary.ports.length - 2) {
            this.updateHUD(`${ship.currentPort.portName}: end of the line`);
          } else {
            this.updateHUD(
              `Current Port: ${ship.currentPort.portName}\n\Next Port: ${
                ship.itinerary.ports[currentPortIndex + 2].portName
              }`
            );
          }
          this.renderCrewComms(`Welcome to ${ship.currentPort.portName}`);

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
