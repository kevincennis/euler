function multiple( range ) {
  var n = getHighestPrime( range ), i = 1, j;
  for ( ; n; i++ ) {
    for ( j = 2; j <= range; ++j ) {
      if ( ( n * i ) % j !== 0 ) {
        break;
      }
    }
    if ( j >= range ) {
      return n * i;
    }
  }
}

function getHighestPrime( n ) {
  while ( n ) {
    if ( isPrime( n ) ) {
      return n;
    }
    n--;
  }
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

console.log( multiple( 20 ) );
