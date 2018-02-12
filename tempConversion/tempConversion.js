var ftoc = function(temp) {
  return roundToTens((temp - 32) * 5/9);
}

var ctof = function(temp) {
  return roundToTens(temp * 9/5 + 32);
}

function roundToTens(number) { return Math.round(number * 10) / 10; }                //number - (number % 0.1);

module.exports = {
  ftoc,
  ctof
}
