/**
 * Program to find factorial of a number
 */

// 5! = 5 X 4 X 3 X 2 X 1 = 120
// n! = n * n-1 X n-2 X n-3 X ... X 1

// Using iteration
function factorial1(n) {
  let prod = 1;
  for (let i = 1; i <= n; i++) {
    prod *= i;
  }
  return prod;
}

console.log(factorial1(5));

// Using recursion
/**
 * 1! = 1 (Base condition)
 * 5! = 5 X 4 X 3 X 2 X 1 = 120
 *    = 5 X 4!
 *
 * f(x) = 1          , when x is 1     (Base condition)
 * f(x) = x X f(x-1) , when x is not 1 (Recusive condition)
 */

function factorial2(x) {
  if (x === 1) {
    return 1;
  } else {
    return x * factorial2(x - 1);
  }
}

console.log(factorial2(7));
