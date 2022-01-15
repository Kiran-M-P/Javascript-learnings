// can create functions with let/const and with simple syntax

// It show up error if fuction is called
// before its declaration

// camera();

let camera = () => {
  return "NikonD3500";
};

console.log(camera());

// due to hoisting behaviour of js
// conventional functions does't shows up erroe
// when its called before declaration
console.log(phone());

function phone() {
  return "motoG3";
}

// doesn't require return and parantheses for single arg


let testFunction = arg => arg * 200;

console.log(testFunction(5));
