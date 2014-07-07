function diff( n ) {
  var i = 1, max = n + 1, squares = 0, sum = 0;
  for ( ; i < max; ++i ) {
    squares += ( i * i );
    sum += i;
  }
  return Math.abs( squares - sum * sum );
}

console.log( diff( 100 ) );
