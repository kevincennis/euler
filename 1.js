var num = 0, i = 3, max = 1000;

for ( ; i < max; ++i ) {
  if ( i % 3 === 0 || i % 5 === 0 ) {
    num += i;
  }
}

console.log( num );
