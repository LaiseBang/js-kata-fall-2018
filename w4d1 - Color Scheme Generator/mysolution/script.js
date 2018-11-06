"use strict";

const reciever = document.querySelector("#reciever");
const colorTemplate = document.querySelector("#colorTemplate").content;

//Button
document.querySelector("button").addEventListener("click", () => {
  // clear the boxes
  reciever.innerHTML = "";
  generateBoxes();
});

// create 5 boxes
function generateBoxes() {
  for (let i = 0; i < 5; i++) {
    let clone = colorTemplate.cloneNode(true);
    //add styling to boxes
    const color = getColors();
    //  clone.querySelector(".color").textContent = color;
    clone.querySelector(".box").style.backgroundColor = color;
    clone.querySelector("code").textContent = `background-color: ${color}`;

    reciever.appendChild(clone);
  }
}

// generate random color
function getColors() {
  return `hsl(${Math.floor(Math.random() * 360)}, 80%, 40%)`;
}

//call function
generateBoxes();
