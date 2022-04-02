const form = document.querySelector("#form");
function addNewPort() {
  event.preventDefault();
  const newPortItem = document.getElementById("portname").value;
  const port = new Port(newPortItem);
  itinerary.ports.push(port);
  controller.ship.dock();
  controller.renderPorts();
  controller.renderShip();
  document.getElementById("portname").value = "";
}

if (form.addEventListener) {
  form.addEventListener("submit", addNewPort, false);
} else if (form.attachEvent) {
  form.attachEvent("onsubmit", addNewPort);
}
