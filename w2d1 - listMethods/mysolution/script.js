/* 
This is the resoult of my struggles, nothing works

"use strict";
let element;
let findLi = [];
//function displayElement(element) {}

listMethods("modify>ul>li");
//listMethods("info>ul>li");
//listMethods("newarray>ul>li");

// TODO: Create listMethods function
function listMethods(findLi) {
  element = document.querySelectorAll(findLi);
  console.log(element);
  //displayElement();
} */

// The following solution is made by canyouseethroughme
"use strict";

function listMethods(id) {
  let lis = document.querySelectorAll("#" + id + " li");
  lis.forEach(li => {
    displayElement(li);
  });
}

function listMethodsFor(id) {
  const lis = document.querySelectorAll("#" + id + " li");
  for (let i = 0; i < lis.length; i++) {
    displayElement(lis[i]);
  }
}

function displayElement(element) {
  console.log(element.textContent);
}

listMethods("info");
listMethods("modify");
listMethods("newarray");

console.log("=======");
listMethodsFor("info");
listMethodsFor("modify");
listMethodsFor("newarray");
