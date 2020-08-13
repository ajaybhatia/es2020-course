/**
 * Program to find x raise to power y
 *
 * 5^3 = 5 X 5 X 5
 *     = 5 X 5^2
 *
 * f(x, y) = 1            , when y is 0
 * f(x, y) = x * f(x, y-1), otherwise
 */

// Iterative method
function power1(x, y) {
  let pow = 1;
  for (let i = 1; i <= y; i++) {
    pow *= x; // Arithmetic assignment operator
  }
  return pow;
}

console.log(power1(3, 5));

// Recursive method
function power2(x, y) {
  if (y === 0) {
    return 1;
  } else {
    return x * power2(x, y - 1);
  }
}

console.log(power2(3, 5));
