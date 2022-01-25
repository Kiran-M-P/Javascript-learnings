// >>>>>24.01.22>>>>>>

// to add audio to Js
const tom1 = new Audio("sounds/tom-1.mp3");
tom1.play();

// object constructor functions
// It is considered good practice to name constructor functions with an upper-case first letter

function BellBoy(name, age, hasPermit, languages) {
  // this Keyword
  // In JavaScript, the thing called this is the object that "owns" the code.
  // The value of this, when used in an object, is the object itself.
  (this.name = name),
    (this.age = age),
    (this.hasPermit = hasPermit),
    (this.languages = languages);
  this.moveSuitCase = function () {
    console.log("done sir!");
  };
}

const bellBoy1 = new BellBoy("harish", 22, "yes", ["english", "hindi"]);

console.log(bellBoy1.languages);
console.log(bellBoy1.name);

// Switch Statements
// The switch statement is used to perform different actions based on different conditions.
// like a short hand for if else statements

switch (key) {
  case value:
    break;

  default:
    break;
}

// objects, methods, dot notation
// property
bellBoy1.name;
// method
bellBoy1.moveSuitCase();
