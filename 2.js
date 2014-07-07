function fib( max ) {
  var prev = 0, curr = 1, tmp, i = 0, sum = 0;
  for ( ; curr <= max; ++i ) {
    sum += curr % 2 === 0 ? curr : 0;
    tmp = prev;
    prev = curr;
    curr = tmp + curr;
  }
  return sum;
}

console.log( fib( 4e6 ) );
