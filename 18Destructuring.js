// ES6 features
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [arr1, arr2];

// destructures temporarily
let arr4 = [...arr1, ...arr2];

console.log(arr3);
console.log(arr4);

// In objects
let yourFrom = "trichy";

const OBJ1 = {
  yourName: "kiran",
  yourFrom,
};

// 2nd element have the weightage if they have same properties
const OBJ2 = {
  yourName: "don",
  yourAge: 20,
};

const OBJ3 = {
  ...OBJ1,
  ...OBJ2,
};

console.log(OBJ3);
