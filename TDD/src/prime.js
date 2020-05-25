function isPrime(num) {
  let count = 0;
  for (start = 2; start <= num / 2; start++) {
    if (num % start == 0) {
      count++;
    }
  }
  if (count == 0) {
    if (num == 0 || num == 1) {
      return false;
    }
    return true;
  } else {
    return false;
  }
}

module.exports = { isPrime };
