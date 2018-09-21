"use strict";
// finds all the li elements
let elements = document.querySelectorAll("li");

elements.forEach(element => {
  //element = li firstElementChild = span innerHTML = the number
  if (element.firstElementChild.innerHTML <= 5) {
    element.remove();
  }
});
