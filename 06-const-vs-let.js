/**
 * Difference between const and let
 */

let var1 = 10;
const var2 = 20;

var1 = Math.PI;
//var2 = "New value";

// Old style of defining a variable
var var3 = 100;

console.log(var1, var2, var3);

// Block-level Access
function sum(x) {
  const y = 10; // y can only be accessed within function
  return x + y;
}

console.log(sum(10), y);
