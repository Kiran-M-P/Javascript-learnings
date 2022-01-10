// A cup is an object, with properties.
// A cup has a color, a design, weight,
// a material it is made of, etc.
// The same way, JavaScript objects can have
// properties, which define their characteristics.

array = [];
console.log(typeof array);

// object initializer

const myCar = {
  // key : value
  model: "roadster",
  brand: "tesla",
  year: 2023,
};

console.log(myCar.brand);
// associative arrays
console.log(myCar["model"]);

// not vaild names === that has a space or a hyphen, or that starts with a number.
// can only be accessed using the square bracket notation.

// practice problem

// write your code below
const myFriend = {
  myFriendAge: 21,
};

const myOwnObject = {
  myAge: 20,
  myName: "kiran",
  myFriend,
};

console.log(myOwnObject.myName);
console.log(myOwnObject.myAge);
console.log(myOwnObject.myFriend.myFriendAge);
