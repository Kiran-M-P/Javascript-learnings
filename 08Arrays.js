// In programming, an array is a collection of elements or items.
// Arrays store data as elements and retrieve them back when you need them.

// Arrays are similar to List in Python.

let myFriends = [];

function addFriend(friend) {
  //   myFriends.push(friend);
  myFriends.unshift(friend);
}

addFriend("kiran");
addFriend("kuamar");
addFriend("kutty");

myFriends.pop("kiran");
console.log(myFriends);

// Array methods

// .push()         Add element at end
// .unshift()      Add element at Start
// .pop()          removes last element/ removes the arg element
// .shift()        removes the first element
// .slice()        to copy and clone a array
// .length         number of elements in a array
// .isArray()      determine if a value is an array
// .concat()       merges one or more arrays and returns a merged array.
// .join()         joins all the elements of the array using a separator and returns a string.
// .fill()         fills an array with a static value
// .includes()     determine the presence on an element in an array
// .indexOf()      know the index position of an element in array.
// .lastIndexOf()  Index of last element
// .reverse()      reverse the array
// .sort()         converts the element types into strings and then sorts them.
