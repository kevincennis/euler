var isPrime = require('./lib/isPrime');

function nthPrime( n ) {
  // 2 is the only even prime, so we count that immediately
  // and then only look at odd numbers
  var i = 1, primes = 1;
  while ( true ) {
    if ( isPrime( i += 2 ) && ++primes === n ) {
      return i;
    }
  }
}

console.log( nthPrime( 10001 ) );
