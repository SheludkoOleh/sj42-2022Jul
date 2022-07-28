//https://www.codewars.com/kata/59859f435f5d18ede7000050/train/javascript

function wordToBin(str) {
  return [...str].map((x) => x.charCodeAt(0).toString(2).padStart(8, "0"));
}

//https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript
function calc(x) {
  const total1 = [...x].map((char) => char.charCodeAt()).join("");
  const total2 = total1.replace(/7/g, 1);
  return (
    [...total1].reduce((a, b) => parseInt(a) + parseInt(b)) -
    [...total2].reduce((a, b) => parseInt(a) + parseInt(b))
  );
}
