//https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/train/javascript
function shuffleIt(arr, ...rest) {
  for (const el of rest) {
    [arr[el[0]], arr[el[1]]] = [arr[el[1]], arr[el[0]]];
  }
  return arr;
}


//https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/train/javascript
function loopArr(arr, direction, steps) {
  for (let i = 0; i < steps; i++) {
    direction === "left" ? arr.push(arr.shift()) : arr.unshift(arr.pop());
  }
  return arr;
}


// https://www.codewars.com/kata/572af273a3af3836660014a1/train/javascript
function infiniteLoop(arr, d, n) {
  for (let i = 1; i <= n; i++) {
    if (d === "left") {
      arr[2].push(arr[0].shift());
      arr[0].push(arr[1].shift());
      arr[1].push(arr[2].shift());
    } else if (d === "right") {
      arr[0].unshift(arr[2].pop());
      arr[1].unshift(arr[0].pop());
      arr[2].unshift(arr[1].pop());
    }
  }
  return arr;
}
