module.exports = function isPrime( n ) {
  var max, i;
  if ( isNaN( n ) || !isFinite( n ) || n % 1 || n < 2 ) {
    return false;
  }
  if ( n % 2 === 0 ) {
    return n === 2;
  }
  max = Math.sqrt( n ), i = 3;
  for ( ; i <= max; i += 2 ) {
    if ( n % i === 0 ) {
      return false;
    }
  }
  return true;
};
