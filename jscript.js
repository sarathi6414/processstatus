// Select all circle elements, the progress bar, and buttons
const circles = document.querySelectorAll(".circle");
const progressBar = document.querySelector(".indicator");
const buttons = document.querySelectorAll("button");

let currentStep = 1;
function updateSteps(event) {
  if (event.target.id === "next") {
    currentStep++;
  } else {
    currentStep--;
  }
  circles.forEach(function(circle, index) {
    if (index < currentStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  progressBar.style.width = ((currentStep - 1) / (circles.length - 1)) * 100 + '%';
  if (currentStep === circles.length) {
    buttons[1].disabled = true;
  } else if (currentStep === 1) {
    buttons[0].disabled = true;
  } else {
    buttons.forEach(function(button) {
      button.disabled = false;
    });
  }
}
buttons.forEach(function(button) {
  button.addEventListener("click", updateSteps);
});
