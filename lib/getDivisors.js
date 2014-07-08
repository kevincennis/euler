module.exports = function getDivisors( n ) {
  var i = 2, max = Math.sqrt( n ), divisors = [];
  while ( i < max ) {
    if ( n % i === 0 ) {
      divisors.push ( i );
      divisors.push ( n / i );
    }
    i++;
  }
  if ( i * i === n ) {
    divisors.push( i );
  }
  return divisors;
};
