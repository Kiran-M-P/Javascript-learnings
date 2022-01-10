// continue === pass in python. Skips the iteration and skips to next block in the loops
// used with loops

// List of even number with specfic number omitted

function evenNumbers(omit) {
  evenList = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 !== 0) {
      continue;
    } else if (i === omit) {
      continue;
    }
    evenList.push(i);
  }
  console.log(evenList);
}

evenNumbers(18);

// break === breaks out of the loop
// used with loops

// List of odd numbers within the given number

function oddNumbers(within) {
  oddList = [];
  for (let i = 0; i < 100; i++) {
    if (i === within) {
      break;
    } else if (i % 2 === 0) {
      continue;
    }
    oddList.push(i);
  }
  console.log(oddList);
}

oddNumbers(15);

// return === break out for entier function and may return something
// used with functions

// return multiples of a num

function multiples(number, multiple) {
  multipleList = [];
  for (i = 0; i < multiple + 1; i++) {
    multipleList.push(number * i);
    // early return
    return multipleList; 
  }
  return multipleList;
}

console.log(multiples(5, 10));
