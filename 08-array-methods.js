/**
 * Array methods
 */

const arr = [37, 9, 1, 89, 94, 12];
// Append new value in an array
arr.push(100);
console.log(arr);

// Remove value from an array
arr.splice(1, 1);
console.log(arr);

// Traverse an array
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Arrow function
const sum = (x, y) => x + y;

console.log(sum(10, 20));

// Map (ES5+)
console.log(arr.map((val) => val * 2));

// Filter
const marks = [98, 67, 89, 34, 51, 60, 62, 71, 82, 83, 69];
console.log(marks.filter((val) => val > 60));

// Reduce
console.log(marks.reduce((val, total) => val + total));

// Some
console.log(marks.some((val) => val > 60));

// Every
console.log(marks.every((val) => val > 60));
