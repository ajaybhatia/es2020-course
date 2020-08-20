/**
 * Armstrong number are three digit number whose
 * sum of cube of digits is same as that of original number
 *
 * 153 = 1**3 + 5**3 + 3**3 = 153
 *
 * Narcisstic Number are those n digit number whose
 * sum of digit rise to power n is same
 *
 * 1634 = 1**4 + 6**4 + 3**4 + 4**4 = 1634
 *
 * Program to find all narcisstic numbers upto 10 million
 */

const isNarisstic = (num) => {
  const size = `${num}`.length;
  let sum = 0;
  let temp = num;

  while (temp > 0) {
    sum += (temp % 10) ** size;
    temp = parseInt(temp / 10);
  }

  return sum === num;
};

for (let num = 0; num <= 10000000; num++) {
  if (isNarisstic(num)) {
    console.log(num);
  }
}
