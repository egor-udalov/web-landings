const buttonLeft = document.querySelector(".slider-buttons__button-left");
const buttonRight = document.querySelector(".slider-buttons__button-right");
const slider = document.querySelector(".gallery .slider");
let shift = 0;

updateButtonStates();

buttonRight.addEventListener("click", function () {
  if (shift > -1575) {
    shift -= 175;
    slider.style.transform = `translateX(${shift}px)`;
    updateButtonStates();
  }
});

buttonLeft.addEventListener("click", function () {
  if (shift < 0) {
    shift += 175;
    slider.style.transform = `translateX(${shift}px)`;
    updateButtonStates();
  }
});

function updateButtonStates() {
  if (shift === 0) {
    buttonLeft.style.opacity = "0.5";
    buttonLeft.disabled = true;
  } else {
    buttonLeft.style.opacity = "1";
    buttonLeft.disabled = false;
  }

  if (shift === -1575) {
    buttonRight.style.opacity = "0.5";
    buttonRight.disabled = true;
  } else {
    buttonRight.style.opacity = "1";
    buttonRight.disabled = false;
  }
}
