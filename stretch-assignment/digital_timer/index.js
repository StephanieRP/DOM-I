let tenSec = 1,
  oneSec = 0,
  msHun = 0,
  msTen = 0;

let num1 = document.getElementById("secondTens");
num1.textContent = tenSec;
let num2 = document.getElementById("secondOnes");
num2.textContent = oneSec;
let num3 = document.getElementById("msHundreds");
num3.textContent = msHun;
let num4 = document.getElementById("msTens");
num4.textContent = msTen;
let startBtn = document.getElementById("start-timer");
startBtn.addEventListener("click", myTimer());

setInterval(function myTimer() {
  let seconds = 10;
  tenSec = seconds;
  seconds--;
  console.log(tenSec);
}, 100);
