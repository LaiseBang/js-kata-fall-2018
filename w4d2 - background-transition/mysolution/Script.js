"use strict";

let lastColor = "";
setInterval(colorDef, 1000);

function colorDef() {
  let newColor = getColors();
  while (newColor === lastColor) {
    newColor = getColors();
  }
  lastColor = newColor;
  document.querySelector("#box").style.backgroundColor = newColor;
}

// generate random color
function getColors() {
  return `hsl(${Math.floor(Math.random() * 360)}, 80%, 40%)`;
}
