var sieve = require('./lib/sieve');

function sum ( a, b ) {
  return a + b;
}

console.log( sieve( 2e6 - 1 ).reduce( sum ) );
