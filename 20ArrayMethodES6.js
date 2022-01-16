// for fun
function makeArray(num) {
  arr = [];
  for (let i = 0; i < num + 1; i++) {
    arr.push(i);
  }
  return arr;
}

// console.log(makeArray(10));

// to access elements of array traditional method

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array1.length; i++) {
  const ele = array1[i];
  // do anything
}

// new array methods

// map()
const newMappedArray = array1.map(function (element) {
  return element * 2;
});

// in arrow function
const newMappedArray1 = array1.map((element) => element ** 2);
console.log(newMappedArray1);

//filter() does not mutate the original array
const newFilteredArray = array1.filter((element) => element < 6);
console.log(newFilteredArray);

// find()
const data = [
  {
    name: "x",
    code: 101,
  },
  {
    name: "y",
    code: 102,
  },
  {
    name: "z",
    code: 103,
  },
];

const findX = data.filter((datum) => datum.name === "x");

console.log(findX);

// forEach() doesn't return any, acts as shorthand for forLoop

data.forEach((datum) => {
  console.log(datum);
});

