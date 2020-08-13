/**
 * Problem 3
 *
 * Largest prime factor
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143 ?
 */

// Heuristic Method (Prime Number)

// function isPrime(num) {
//   if (num === 1 || (num % 2 === 0 && num !== 2)) return false;

//   for (let i = 3; i < Math.sqrt(num); i += 2) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// for (let i = 1; i <= 1000000; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }

let num = 600851475143;
let temp = num;

for (let i = 3; i < Math.sqrt(num); i += 2) {
  if (temp % i === 0) {
    temp /= i;
  }

  // Definition of highest prime factor
  if (temp === 1 || temp === i) {
    console.log(i);
    break;
  }
}
