// The console.log() is a function in JavaScript which is used to print any kind of variables
// defined before in it or to just print any message that needs to be displayed to the user.
console.log("hello")

// Use fuction keyword to define a function
const myName = "kiran"
let myAge = 20
let IamFrom = "Trichy"

// function syntax

function aboutMe() {
  console.log("I'm ", myName, "From ", IamFrom, "and I'm ", myAge)
}

aboutMe()

// parameter/arguments
// return statement: To store value without assigning variable, After return no statement gets excecuted

function squareOf(x) {
  square = x ** 2
  return square
}

console.log(squareOf(25))

// vs-code  learnings
// shortcuts: ctrl+p = file search, alt+shift+f = prettier formatting, crtl+, = settings
