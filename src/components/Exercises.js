// Exercise 1
export const reverseString = (str) => {
  // The string is first converted to an array using split(), to then have its content reversed and be converted back to a string.
  return str.split("").reverse().join("");
};

//----------------------------------------------------------------------------------------------------//

// Exercise 2
export const fizzBuzz = (n) => {
  // Declaring empty array.
  let arr = [];

  // Looping through the 1-to-n interval.
  for (let i = 1; i <= n; i++) {
    // f and b return false respectively if current iteration is not multiple of 3 of 5.
    let f = !((i - 1) % 3),
      b = !((i - 1) % 5);
    /* 
   If f both b are true then current index is a multiple of 3 and 5 ► fizzbuzz is pushed to the array.
   If only f is true then index is a multiple of 3 ► fizz is pushed to the array.
   If only b is true then index is a multiple of 5 ► buzz is pushed to the array.
   Push an empty string otherwise.
   */
    arr.push(f ? (b ? "fizzbuzz" : "fizz") : b ? "buzz" : i);
  }

  // Returning final array.
  return arr;
};

//----------------------------------------------------------------------------------------------------//

// Exercise 3
export const perfectSquares = (upper) => {
  // Declaring empty array.
  let arr = [];
  // Looping through values between lower and upper limits.
  for (let i = 0; i <= upper; i++) {
    // Checking if index is a perfect square, if so — push to array otherwise do nothing.
    Math.sqrt(i) % 1 === 0 ? arr.push(i) : console.log("nein");
  }
  return arr;
};

//----------------------------------------------------------------------------------------------------//

// Exercise 4
export const camelToKebab = (str) => {
  // Using regular expressions, then converting the output to lower case.
  return str
    .replace(/([a-z])([A-Z0-9])/g, "$1-$2")
    .replace(/([A-Z0-9])([A-Z])(?=[a-z])/g, "$1-$2")
    .toLowerCase();
};
