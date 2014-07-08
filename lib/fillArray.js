module.exports = function fillArray( n, val ) {
  var arr = new Array( n ), i = -1;
  while( ++i < n ) {
    arr[ i ] = val;
  }
  return arr;
};
