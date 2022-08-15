//https://www.codewars.com/kata/53844152aa6fc137d8000589/train/javascript
const always = n => () => n;

//https://www.codewars.com/kata/59bdbe9d46038724ca0000b9/train/javascript
const state = {
  modifier: 2,
};
function solution(arr, options) {
  arr = arr.slice();
  for (let i = 0; i < arr.length; ++i) {
    arr[i] += 2 * options.modifier;
  }
  return arr;
}
