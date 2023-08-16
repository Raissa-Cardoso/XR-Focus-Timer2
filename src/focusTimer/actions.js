import state from "./state.js";
import * as timer from "./timer.js";
import * as sounds from "./sounds.js";
import * as chooseSound from "./chooseSound.js";
import { rain } from "./elements.js";

export function toggleRunning() {
  state.isRunning = !state.isRunning;

  timer.countdown();
  sounds[state.sound].play();
  rain.classList.add("selected");
}

export function reset() {
  state.isRunning = false;

  timer.updateDisplay();
  sounds[state.sound].pause();
  chooseSound.resetCard();
}

export function plusFive() {
  timer.updateMinutes("plus");
}

export function minusFive() {
  timer.updateMinutes("minus");
}

export function playSound(sound) {
  chooseSound.chooseSound(sound);
}
