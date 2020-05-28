function sumAll(numbers) {

  let sum = 0;

  let a = numbers[0];
  let b = numbers[1];

  if( a < b ) {
    for ( let i = a; i <= b; i++) {
      sum += i;
    }
  } else {
    while(a >= b) {
      sum += a;
      a = a - 1;
    }
  }

  return sum;
  
}

export {
  sumAll,
};
