const clockContainer = document.querySelector(".clock"),
  clockTitle = clockContainer.querySelector("h1");

function loadClock() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();
  clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute
  }:${second < 10 ? `0${second}` : second}`;
}
function init() {
  setInterval(loadClock, 1000);
}

init();
