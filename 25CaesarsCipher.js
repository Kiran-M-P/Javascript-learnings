const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function rot13(str) {
  // create accumulator
  let accumulator = "";

  // loop through the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const isAlpha = alphabet.includes(char);

    // if char is not alphabet, add to acc
    if (isAlpha === false) {
      accumulator += char;
    }

    // else, rotate + or - 13, add to acc
    else {
      const charIndex = alphabet.findIndex((c) => c === char);
      accumulator += alphabet[charIndex + 13] || alphabet[charIndex - 13];
    }
  }
  return accumulator;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
