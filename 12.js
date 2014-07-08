var getDivisors = require('./lib/getDivisors');

// generate a function that returns a new
// "triangle number" on each invocation
function makeTriangleFunction() {
  var i = 1, sum = 0;
  return function() {
    return sum += i++;
  }
}

function getTriangle( n ) {
  var i = 1, triangle = makeTriangleFunction(), val;
  while ( true ) {
    if ( getDivisors( val = triangle() ).length > n ) {
      return val;
    }
    ++i;
  }
}

console.log( getTriangle( 500 ) );
