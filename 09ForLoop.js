// 01 for loop

let num = [];
for (let i = 0; i < 10; i = i + 2) {
  num.push(i);
}
console.log("for loop", num);

// 02 for in loop /loops over index of elements in array

for (let index in num) {
  console.log("For in loop", num[index]);
}

// 03 for of loop / loops over elements in array

let myFriends = ["kiran", "kutty", "kumar"];

for (let friend of myFriends) {
  console.log("for of loop", friend, "is my friend");
}

// 04 while loop

let num2 = [];
let i = 0;
while (i < 20) {
  num2.push(i * 2);
  i++;
}

console.log("while loop", num2);

// 05 do loop

let j = 0;

do {
  console.log("just do it");
  j++;
} while (j < 5);

// VS code short cuts
// ctrl+o----open files from explorer
// shift+crt+s----save as
