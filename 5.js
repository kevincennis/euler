var isPrime = require('./lib/isPrime');

function multiple( range ) {
  var n = getHighestPrime( range ), i = 0, j;
  while( ++i ) {
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

console.log( multiple( 20 ) );
