//https://www.codewars.com/kata/588502f87987a27f690001f7/train/javascript

function areEqual(s1, s2) {
  return [...s1].every((x) => s2.has(x)) && [...s2].every((x) => s1.has(x));
}

function notEqual(s1, s2) {
  return !areEqual(s1, s2);
}

//https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascript
function process2Arrays(arr1, arr2) {
    const bothArr = [...new Set(arr1)].filter((value) => arr2.includes(value)).length;
    const diffArr1 = [...new Set(arr1)].filter((value) => !arr2.includes(value)).length;
    const diffArr2 = [...new Set(arr2)].filter((value) => !arr1.includes(value)).length;
    return [bothArr, diffArr1 + diffArr2 , diffArr1, diffArr2];
  }
