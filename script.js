const playButtonContainer = document.querySelector(".play-button-container");
const submitButtons = document.querySelectorAll(".submit-button");

playButtonContainer.addEventListener("mouseover", () => {
  playButtonContainer.style.border = "2px solid var(--button-background)";
});

playButtonContainer.addEventListener("mouseleave", () => {
  playButtonContainer.style.border = "none";
});

console.log(submitButtons);

submitButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
