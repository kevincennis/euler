var isPrime = require('./lib/isPrime');

function getFactors( max ) {
  var i = ~~Math.sqrt( max ), factors = [];
  for ( ; i >= 2; --i ) {
    if ( max % i === 0 ) {
      factors.push( i );
    }
  }
  return factors;
}

function largestPrimeFactor( n ) {
  var factors = getFactors( n ), i = 0, len = factors.length;
  for ( ; i < len; ++i ) {
    if ( isPrime( factors[ i ] ) ) {
      return factors[ i ];
    }
  }
  return 1;
}


console.log( largestPrimeFactor( 600851475143 ) );
