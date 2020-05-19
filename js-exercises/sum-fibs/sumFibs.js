function sumFibs(num) {

  let series = generateSeries(num);
  return sumSeries(series);

}

function generateSeries(number) {
  let a = 0;
  let b = 1;
  let c = 0;
  let series = [a, b];
  while( b <= number ) {
    c = a + b;
    a = b;
    b = c;
    if(c <= number) {
      series.push(c);
    }
  }
  return series;
}

function sumSeries(series) {
  let sum = 0;
  for(let i = 0; i < series.length; i++) {
    if(series[i] % 2 != 0) {
      sum += series[i];
    }
  }
  return sum;
}
export {
  sumFibs,
};
