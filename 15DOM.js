// DOM stands for Document Object Model.
// it is a programming interface that allows us to create,
// change, or remove elements from the document.

// The DOM views an HTML document as a tree of nodes
// A node represents an HTML element.

// Select Elements in the Document

// querySelector();
const header = document.querySelector("h1");

header.innerText = "Feeling good";

console.log(typeof document);

// querySelectorAll()
// Like css we can use #id and .class as also a selector 
let list = document.querySelectorAll("ul > li");

for (i = 0; i < list.length; i++) {
  const listItems = list[i];
  listItems.innerText = "YO YO YOOOO";
}

// getElementById()

const subHead = document.getElementById("element");
subHead.innerText = "Hell yeah!";
