"use strict";

window.addEventListener("load", findAll);

//finding all occurrences of an element without a function
let catsAt = [];
const animals = [
  "dog",
  "cat",
  "horse",
  "cat",
  "mouse",
  "dog",
  "cat",
  "cat",
  "dog"
];
const element = "cat";

function findAll() {
  let idx = animals.indexOf(element);
  while (idx != -1) {
    catsAt.push(idx);
    idx = animals.indexOf(element, idx + 1);
  }
}
console.log(catsAt);
