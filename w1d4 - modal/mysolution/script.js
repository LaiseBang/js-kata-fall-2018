"use strict";

document.addEventListener("DOMContentLoaded", hideModal);
document.querySelector("#details").addEventListener("click", showModal);

function showModal() {
  console.log("Show modal");

  document.querySelector("#modal_container").style.opacity = "1";
  document.querySelector("#modal_container").style.pointerEvents = "auto"; // slå mus til
  document.querySelector("#closebutton").addEventListener("click", hideModal);
}

function hideModal() {
  console.log("Hide modal");

  document.querySelector("#modal_container").style.pointerEvents = "none"; // slå mus fra
  document.querySelector("#modal_container").style.opacity = "0";
}
