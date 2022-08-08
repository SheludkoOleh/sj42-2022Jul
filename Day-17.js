// https://www.codewars.com/kata/573023c81add650b84000429/train/javascript

function countGrade(scores) {
  return {
    S: scores.filter((x) => x >= 100).length,
    A: scores.filter((x) => x >= 90).filter((x) => x < 100).length,
    B: scores.filter((x) => x >= 80).filter((x) => x < 90).length,
    C: scores.filter((x) => x >= 60).filter((x) => x < 80).length,
    D: scores.filter((x) => x >= 0).filter((x) => x < 60).length,
    X: scores.filter((x) => x == -1).length,
  };
}


//https://www.codewars.com/kata/57308546bd9f0987c2000d07/train/javascript

function mirrorImage(arr) {
  let firstNum;
  let mirrorNum;
  const result = arr.some((el, idx) => {
    firstNum = el;
    mirrorNum = arr[idx + 1];
    return el === Number(String(mirrorNum).split("").reverse().join(""));
  });

  return result ? [firstNum, mirrorNum] : [-1, -1];
}

//https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript
function bigToSmall(arr) {
  return [].concat(...arr).sort((a, b) => b - a).join(">");
}
