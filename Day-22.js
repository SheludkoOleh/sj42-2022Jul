
//https://www.codewars.com/kata/559f860f8c0d6c7784000119/train/javascript
function anyArrows(arrows) {
  return arrows.some((arr) => !arr.damaged);
}

//https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript
function multiplyAll(arr) {
  return function (newArray) {
    return arr.map((x) => x * newArray);
  };
}
