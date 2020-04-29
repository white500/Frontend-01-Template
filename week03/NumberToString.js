function convertNumberToString(number, x = 10) {
    var integer = Math.floor(number);
    var fraction = null;
    if (x === 10) fraction = ('' + number).match(/\.\d*/)[0];
    var string = ''
    while(integer > 0) {
      string = integer % x + string;
      integer = Math.floor(integer / x);
    }
    return fraction ? string + fraction : string;
}