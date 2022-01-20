const romanDict = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function convertToRoman(num) {
  // create a accumulator
  let accumulator = "";
  
  // Loop through dict
  for (const [key, value] of Object.entries(romanDict)) {
    // while num >= element
    while (num >= value) {
      num -= value;
      accumulator += key;
    }
  }

  return accumulator;
}

console.log(convertToRoman(3));
console.log(convertToRoman(19));
