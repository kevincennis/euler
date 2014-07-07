function getFactors( max ) {
  var i = ~~Math.sqrt( max ), factors = [];
  for ( ; i >= 2; --i ) {
    if ( max % i === 0 ) {
      factors.push( i );
    }
  }
  return factors;
}

function isPrime( n ) {
  var max = ~~Math.sqrt( n ), i = 2;
  for ( ; i < max; ++i ) {
    if ( n % i === 0 && i !== n  ) {
      return false;
    }
  }
  return true;
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
