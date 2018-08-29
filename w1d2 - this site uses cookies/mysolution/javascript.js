document.querySelector(".luk").addEventListener("click", closeCookie);

function closeCookie() {
  console.log("test");
  document.querySelector("#cookie").style.animation =
    "moveup_kf 1s ease-in-out";
  document.querySelector("#cookie").style.animationFillMode = "forwards";
}
