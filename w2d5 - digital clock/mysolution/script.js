"Use strict";

function showTime() {
  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  // add 0 infront of number if less than 10
  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  setTimeout(showTime, 1000);

  //console.log(seconds);
  // console.log(today);
}
showTime();
clearClass();

// clear classes (element.className = "")
function clearClass() {
  let digit = document.getElementById("clock");
  digit.className = digit.className.replace(/\bdigit0\b/g, "");
}

//if hours, minutes or seconds < 10 / n:th[0] child = digit0
//if hours, minutes or seconds = 1 :nth[1] child = digit1
//if hours, minutes or seconds = 2 :nth[2] child = digit2
//if hours, minutes or seconds = 3 :nth[3] child = digit3
//if hours, minutes or seconds = 4 :nth[4] child = digit4
//if hours, minutes or seconds = 5 :nth[5] child = digit5
//if hours, minutes or seconds = 6 :nth[6] child = digit6
//if hours, minutes or seconds = 7 :nth[7] child = digit7
//if hours, minutes or seconds = 8 :nth[8] child = digit8
//if hours, minutes or seconds = 9 :nth[9] child = digit9
