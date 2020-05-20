function sumPrimes(number) {

  let primeNumbers = getPrimeNumbers(number);

  let primeNumbersSum = primeNumbers.reduce(function(a, b) {

    return a + b;

  });

  return primeNumbersSum;

}

function getPrimeNumbers(num) {

  let nos = [];

  for( let i = 2; i <= num; i++) {

    if(num % i != 0) {

      nos.push(i);

    }

  }
  
  return nos;

}

export {
  sumPrimes,
};
