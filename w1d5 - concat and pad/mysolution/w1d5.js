"use strict";

let newText;

function concatNPad(name, number) {
  if (number < 10) {
    newText = name.replace("#", "0" + number);
    return newText;
  } else {
    newText = name.replace("#", number);
    return newText;
  }
}
console.log(concatNPad("image#.jpg", 3));
console.log(concatNPad("image##.jpg", 4)); //this does not work
