// PROMISES
const { error } = require("console");
const { reject } = require("lodash");
const { resolve } = require("path");

// Creating a new Promise and saving it to the test variable. Two
// arguments are being passed, one for when the promise resolves, and one for if
// the promise gets rejected.

const test = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("You win!");
  } else {
    reject(new Error("You loosed!"));
  }
});

test
  .then(
    (message) => console.log(message) // log the resolved value of the Promise
  )
  .catch((error) => console.log(error)); // log the rejected error of the Promise

// ASYNC/AWAIT
// Creating a new promise that runs the function in the setTimeout after 5 seconds.
const newPromise = new Promise(
  (resolve, reject) => setTimeout(() => "All done!"),
  5000
);

// Creating an async function using an arrow expression and saving it to the variable asyncFunction.
const asyncFunction = async () => {
  // Awaiting the promise to resolve and saving the result to the variable
  // finalResunl.
  const finalResult = await newPromise;

  // Logging the result of the promise to the console
  console.log(finalResult); //Output: All done!
};
