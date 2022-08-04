//https://www.codewars.com/kata/572cb264362806af46000793/train/javascript

const threeInOne = (arr) => {
  const sumOfThreeElements = [];
  for (let i = 0; i < arr.length; i += 3) {
    sumOfThreeElements.push(arr.slice(i, i + 3).reduce((a, b) => a + b));
  }
  return sumOfThreeElements;
};

//https://www.codewars.com/kata/572df796914b5ba27c000c90/train/javascript
const sortIt = (arr) => {
  const res = arr.slice();
  return res.sort((a, b) => {
    let groupOne = arr.filter((x) => x === a).length;
    let groupTwo = arr.filter((y) => y === b).length;
    return groupOne === groupTwo ? b - a : groupOne - groupTwo;
  });
};


//https://www.codewars.com/kata/572fdeb4380bb703fc00002c/train/javascript
const isolateIt = (arr) =>
  arr.map((el) => el.slice(0, el.length / 2) + "|" + el.slice(-el.length / 2));
