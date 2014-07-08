// sieve of eratosthenes, ya heard?
function sieve( n ) {
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
}

function sum ( a, b ) {
  return a + b;
}

function fillArray( n, val ) {
  var arr = new Array( n ), i = -1;
  while( ++i < n ) {
    arr[ i ] = val;
  }
  return arr;
}

console.log( sieve( 2e6 - 1 ).reduce( sum ) );
