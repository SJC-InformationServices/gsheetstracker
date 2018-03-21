Array.prototype.findIndex = function(search){
    if(search == "") return false;
    for (var i=0; i<this.length; i++)
      if (this[i] == search) return i;
  
    return -1;
  };
  // String reverse
  String.prototype.reverse =
  function()
  {
      splitext = this.split("");
      revertext = splitext.reverse();
      reversed = revertext.join("");
      return reversed;
  };
  function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
  }
  // function to calculate EAN / UPC checkdigit
  function eanCheckDigit(s)
  {
      var result = 0;
      var rs = s.reverse();
      for (counter = 0; counter < rs.length; counter++)
      {
          result = result + parseInt(rs.charAt(counter)) * Math.pow(3, ((counter+1) % 2));
      }
      return (10 - (result % 10)) % 10;
  }
  function array_combine (keys, values) { // eslint-disable-line camelcase
    //  discuss at: http://locutus.io/php/array_combine/
    // original by: Kevin van Zonneveld (http://kvz.io)
    // improved by: Brett Zamir (http://brett-zamir.me)
    //   example 1: array_combine([0,1,2], ['kevin','van','zonneveld'])
    //   returns 1: {0: 'kevin', 1: 'van', 2: 'zonneveld'}
    var newArray = {};
    var i = 0;
    // input sanitation
    // Only accept arrays or array-like objects
    // Require arrays to have a count
    if (typeof keys !== 'object') {
      return false;
    }
    if (typeof values !== 'object') {
      return false;
    }
    if (typeof keys.length !== 'number') {
      return false;
    }
    if (typeof values.length !== 'number') {
      return false;
    }
    if (!keys.length) {
      return false;
    }
    // number of elements does not match
    if (keys.length !== values.length) {
      return false;
    }
    for (i = 0; i < keys.length; i++) {
      newArray[keys[i]] = values[i];
    }
    return newArray;
  }