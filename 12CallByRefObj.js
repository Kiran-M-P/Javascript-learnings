// Call by value

// When a variable is passed as a parameter to a function,
// if any changes are made to the parameter, the original
// variable will remain unaffected. This is known as call
// by value and this is true for all values having a
// primitive data type.

function primitiveMutate(x) {
  x++;
  console.log(x);
}

const num = 100;

primitiveMutate(num);
console.log(num);

// Call by reference

// When a variable’s reference(address) and not its value is
// passed to a function’s parameter, any changes made to the
// parameter will update the original variable reference.
// This is known as call by reference and this is true
// for all values having a non-primitive data type.
// Ex. arrays, objects

const myProfile = {
  myName: "Kiran",
  myAge: 20,
};

function objectMutate(obj) {
  obj.myAge++;
  console.log(obj);
}
objectMutate(myProfile);
console.log(myProfile);
