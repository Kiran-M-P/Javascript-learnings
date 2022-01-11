// Variable Scope:
//     Scope in JavaScript refers to the current context of code,
//     which determines the accessibility of variables to JavaScript.

// The two types of scope are local and global:
//     Global variables are those declared outside of a block
//     Local variables are those declared inside of a block

// global variable
let species = "HomoSapiens";

function evolution() {
  // local variable
  let species = "Humans";
  console.log(species);
}

console.log(species);
evolution();
console.log(species);

// Variable shadowing
// Global or higer scope variable will be blocked by
// child scope variable
