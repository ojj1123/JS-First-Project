'use strict';

const body = document.querySelector("body");

const BG_IMG = "bgImg";
function genRandom() {
  return Math.floor(Math.random() * 3);
}
function loadBackground() {
  const bgImg = document.createElement("img");
  const rendomNum = genRandom();
  bgImg.className = BG_IMG;
  bgImg.src = `./images/${rendomNum + 1}.jpg`;
  body.appendChild(bgImg);
}

function init() {
  loadBackground();
}

init();
