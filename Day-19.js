//https://www.codewars.com/kata/5735e39313c205fe39001173/train/javascript

function countAnimals(animals, count) {
  const result = [];
  for (let i = 0; i < count.length; i++) {
    const match = (animals.match(new RegExp(count[i], "g")) || []).length;
    result.push(match);
  }
  return result;
}

//https://www.codewars.com/kata/573975d3ac3eec695b0013e0

function findSimilarity(str, word) {
  const regularstr =
    word[0] + word.slice(1, -1).replace(/./g, ".") + word.slice(-1);
  const reg = new RegExp("^" + regularstr + "$");
  return str
    .split(" ")
    .filter((v) => reg.test(v))
    .join(" ");
}
