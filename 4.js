function findLargestPalindrome( range ) {
	var i = 0, j, product, max = -Infinity;
	for ( ; i < range; ++i ) {
    for ( j = Math.max( 0, i ); j < range; ++j ) {
      product = i * j;
      if ( product > max && isPalindrome( product ) ) {
        max = product;
      }
    }
  }
  return max;
}

function isPalindrome( num ) {
  return String( num ) == String( num ).split('').reverse().join('');
}

console.log( findLargestPalindrome(  999 ) );
