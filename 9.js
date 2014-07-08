// shitty brute force method (although still way under 1000ms)
// need to get some number theory up in this joint
function getTriplet( n ) {
  var i = 0, j, k, count = 0;
  while ( ++i <= n ) {
    for ( j = i + 1; j <= n; ++j ) {
      for ( k = j + 1; k <= n; ++k ) {
        if ( i + j + k === n && i * i + j * j === k * k ) {
          return i * j * k;
        }
      }
    }
  }
}

console.log( getTriplet( 1000 ) );
