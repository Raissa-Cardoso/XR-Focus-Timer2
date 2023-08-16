import state from "./state.js";
import * as sounds from "./sounds.js";

export function chooseSound(soundSelected) {
  chooseCardActive(soundSelected);
  sounds[state.sound].pause();
  state.sound = soundSelected;
  sounds[state.sound].play();
}

export function chooseCardActive(soundSelected) {
  let sound = document.getElementById(soundSelected);
  let stateSound = document.getElementById(state.sound);
  sound.classList.add("selected");
  if (sound != stateSound) stateSound.classList.remove("selected");
}

export function resetCard() {
  let stateSound = document.getElementById(state.sound);
  stateSound.classList.remove("selected");
  state.sound = "rain";
}
