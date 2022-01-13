const addLineBtn = document.getElementById("addLine");
const subLineBtn = document.getElementById("subLine");
const list = document.getElementById("list");
let num = 0;
function addLine() {
  num++;
  // create element
  let li = document.createElement("li");

  // append element
  list.appendChild(li);

  //   //   append text
  //   //   explicit
  //   const textNode = document.createTextNode("Line -");
  //   const b = document.createElement("b");
  //   b.appendChild(textNode);
  //   const textNode2 = document.createTextNode(num);
  //   li.appendChild(b);
  //   li.appendChild(textNode2);

  // implicit
  //   cant add event litener to this
  li.setAttribute("data-counter", num);
  li.innerHTML = "<b>Line -</b>" + num;
  
// change css with js
  if (num % 2 === 0) {
    li.setAttribute("class", "even");
    li.style.fontSize = "2rem";
  } else {
      li.setAttribute("class", "odd")
  }
}

function subLine() {
  //   let removeLi = document.querySelector("li");
  //   list.removeChild(removeLi);

  const li = document.querySelector("[data-counter='" + num + "']");
  num--;
  li.remove();
}

addLineBtn.addEventListener("click", addLine);
subLineBtn.addEventListener("click", subLine);

// counter
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
