// Javascript
const keysEl = document.querySelector(".keys");
const keys = Array.from(document.querySelectorAll(".key"));

const removeTransition = (event) => {
  if (event.propertyName !== "transform") return;
  //remove playing class from the event
  event.target.classList.remove("playing");
};

//play corresponding sound when a user clicks on the keyboard
const playSound = (event) => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (!audio) return;

  key.classList.toggle("playing");
  audio.currentTime = 0;
  audio.play();
};

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

//keydown event happens when a key is pressed down
window.addEventListener("keydown", playSound);
