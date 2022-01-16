// Promise
// A promise represents a value which is unknown now
// that may become known in future
// Also called a Async value

const promiseObject = fetch("data.json");

promiseObject.then((response) => {
  const promiseObject2 = response.json();
  promiseObject2.then((data) => {
    console.log(data);
  });
});