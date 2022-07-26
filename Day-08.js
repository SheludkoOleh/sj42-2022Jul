
//https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript
function whatNumberIsIt(n) {
  switch (true) {
    case n == Number.MAX_VALUE:
      return "Input number is Number.MAX_VALUE";
    case n == Number.POSITIVE_INFINITY:
      return "Input number is Number.POSITIVE_INFINITY";
    case n == Number.MIN_VALUE:
      return "Input number is Number.MIN_VALUE";
    case n == Number.NEGATIVE_INFINITY:
      return "Input number is Number.NEGATIVE_INFINITY";
    case isNaN(n):
      return "Input number is Number.NaN";
    default:
      return "Input number is " + n;
  }
}


//https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript
// я написав код в рядок. Але чи вірно форматує прітєр його? 

function colorOf(r, g, b) {
  return (
    "#" +
    r.toString(16).padStart(2, 0) +
    g.toString(16).padStart(2, 0) +
    b.toString(16).padStart(2, 0)
  );
}



//https://www.codewars.com/kata/57256064856584bc47000611/train/javascript
function howManySmaller(arr, n) {
  return arr.filter((x) => +x.toFixed(2) < n).length;
}



