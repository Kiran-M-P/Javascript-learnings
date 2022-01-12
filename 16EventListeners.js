let addBtn = document.querySelector("#addBtn");
let subBtn = document.querySelector("#subBtn");
let counter = document.querySelector("#count");

let count = 0;

function addition() {
  count++;
  counter.innerText = count;
}

function subraction() {
  count--;
  counter.innerText = count;
}

addBtn.addEventListener("click", addition);
subBtn.addEventListener("click", subraction);
