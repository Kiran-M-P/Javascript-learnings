const sample = "I'm Kiran and\
I'm a frontEnd dev";

console.log(sample);

// with template literals we can write multi-line
// string without backSlach

// as use ${} as place holders. Like formating in python

const intro = (Name, Age) =>
  console.log(`I'm ${Name} and I'm ${Age} years old`);

intro("kiran", 20);
intro("eshwar", 10);
