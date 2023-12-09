const donut = new Donut();
const donutButton = document.querySelector(".donut-button");
const clickerButton = document.querySelector(".clicker-button");
const multiplierButton = document.querySelector(".multiplier-button");
const resetButton = document.querySelector(".reset-button");
const modalFred = document.querySelector(".fred");
const modalInspiration = document.querySelector(".modal-inspiration");
const modalContact = document.querySelector(".modal-contact");
const fredButton = document.querySelector(".about-fred");
const inspirationButton = document.querySelector(".inspiration");
const contactMeButton = document.querySelector(".contact");

donutButton.addEventListener("click", () => {
  donut.donutClick();
  donut.updateDonutCount();
});

clickerButton.addEventListener("click", () => {
  donut.buyAutoClicker();
  donut.updateAutoClicker();
  donut.updateDonutCount();
});

multiplierButton.addEventListener("click", () => {
  donut.buyMultiplier();
  donut.updateDonutMultiplier();
  donut.updateDonutCount();
});

resetButton.addEventListener("click", () => {
  location.reload();
});

fredButton.onclick = function () {
  modalFred.style.display = "block";
};

inspirationButton.onclick = function () {
  modalInspiration.style.display = "block";
};

contactMeButton.onclick = function () {
  modalContact.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == modalFred) {
    modalFred.style.display = "none";
  }
  if (event.target == modalInspiration) {
    modalInspiration.style.display = "none";
  }
  if (event.target == modalContact) {
    modalContact.style.display = "none";
  }
};

function autoClick() {
  for (let i = 0; i < donut.autoClickers; i++) {
    donut.donutClick();
  }
  donut.updateDonutCount();
}

setInterval(autoClick, 1000);
