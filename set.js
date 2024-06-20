// console.log(1);
// console.log(2);
// let num = 0;
// const intervalId = setInterval(() => {
//   console.log(++num);
//   if (num === 7) {
//     clearInterval(intervalId);
//   }
// }, 1000);
// console.log(4);
// console.log(5);
let intervalId;
let num = 0;
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const showText = document.getElementById("show-text");
startButton.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      // console.log(addNumber);
      showText.innerText = num++;
    }, 1000);
  }
  stopButton.disabled = false;
  resetButton.disabled = false;
  startButton.disabled = true;
});

stopButton.addEventListener("click", () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  startButton.disabled = false;
  stopButton.disabled = true;
});
resetButton.addEventListener("click", () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  num = 0;
  showText.innerText = "";
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
});
