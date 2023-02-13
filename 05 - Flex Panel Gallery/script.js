// Select panel class element
const panelEl = document.querySelectorAll(".panel");

panelEl.forEach((panel) => {
  //add event handler to click event
  panel.addEventListener("click", () => {
    panel.classList.toggle("open");
  });
  // For text transition
  panel.addEventListener("transitionend", (event) => {
    if (event.propertyName.includes("flex-grow")) {
      panel.classList.toggle("open-active");
    }
  });
});
