function fibo(num) {
  if (num == 0) {
    return 0;
  }
  if (num == 1) {
    return 1;
  } else {
    return fibo(num - 1) + fibo(num - 2);
  }
}

function main(num) {
  let result = [];
  if (num == 0) {
    result[num] = num;
    return result;
  }
  if (num > 0) {
    for (i = 0; i < num; i++) {
      result[i] = fibo(i);
    }
    return result;
  } else {
    return "Not possible for finding fibonacci series";
  }
}

module.exports = { fibo, main };
