/**
 * Find sum of all even numbers in an array
 */

const arr = [10, 20, 21, 31, 28, 53, 27, 91, 79, 51, 54, 75, 113];

// Traditional method
let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     sum += arr[i];
//   }
// }

// console.log(sum);

// ES5+ method
console.log(
  arr.filter((val) => val % 2 == 0).reduce((val, total) => val + total)
);

//Todo: Find sum of all numbers which are mutliple of 3
console.log(
  arr.filter((val) => val % 3 == 0).reduce((val, total) => val + total)
);

//Todo: Find sum of all numbers which are multiple of 3 or 5
console.log(
  arr
    .filter((val) => val % 3 == 0 || val % 5 == 0)
    .reduce((val, total) => val + total)
);

//Todo: Find sum of all numbers which are multiple of 3 and 5
console.log(
  arr
    .filter((val) => val % 3 == 0 && val % 5 == 0)
    .reduce((val, total) => val + total)
);

//Todo: Find product of all numbers which are multiple of 3 or 5
console.log(
  arr
    .filter((val) => val % 3 == 0 || val % 5 == 0)
    .reduce((val, total) => val * total)
);

//Todo: Find sum of all prime numbers in array arr
// [10, 20, 21, 31, 28, 53, 27, 91, 79, 51, 54, 75, 113]
const isPrime = (num) => {
  if (num == 2) return true;
  if (num % 2 == 0) return false;

  for (let i = 3; i < Math.sqrt(num); i += 2) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

console.log(
  arr.filter((val) => isPrime(val)).reduce((val, total) => val + total)
);
