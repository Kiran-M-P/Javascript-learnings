// License age checker

function canIgetLicense(age) {
  if (age > 18) {
    return true;
  }
  return false;
}

// Age category checker

function ageGroup(age) {
  if (age < 18) {
    console.log("your are in junior group");
  } else if (age < 40) {
    console.log("your are in senior group");
  } else {
    console.log("your are in super senior group");
  }
}

ageGroup(60);
ageGroup(15);
ageGroup(35);



// Number size checker

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
  // Only change code above this line
}

console.log(testSize(14));
