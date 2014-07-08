var fillArray = require('./fillArray');

// sieve of eratosthenes, ya heard?
module.exports = function sieve( n ) {
  var arr = fillArray( n, true ),
    primes = [],
    max = Math.sqrt( n ),
    i = 2, j;
  for ( ; i <= max; ++i ) {
    if ( arr[ i ] ) {
      for ( j = i * i; j <= n; j += i ) {
        arr[ j ] = false;
      }
    }
  }
  for ( i = 2; i < n; ++i ) {
    arr[ i ] && primes.push( i );
  }
  return primes;
};
