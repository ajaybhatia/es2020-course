/**
 * Find sum of all even numbers in an array
 */

const arr = [10, 20, 21, 28, 27, 91, 51, 54, 75];

// Traditional method
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    sum += arr[i];
  }
}

console.log(sum);

// ES5+ method
console.log(
  arr.filter((val) => val % 2 == 0).reduce((val, total) => val + total)
);

//Todo: Find sum of all numbers which are mutliple of 3

//Todo: Find sum of all numbers which are multiple of 3 or 5

//Todo: Find sum of all numbers which are multiple of 3 and 5

//Todo: Find product of all numbers which are multiple of 3 or 5
