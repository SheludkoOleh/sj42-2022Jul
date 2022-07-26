

//https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript
function firstToLast(str, c) {
  return str.lastIndexOf(c) - Math.max(0, str.indexOf(c));
}

//https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript

function splitAndMerge(string, separator) {
  return string.split(' ').map(x=>x.split('').join(separator)).join(' ')
}


//https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript
function cutIt(arr) {
  const shortest = Math.min(...arr.map((x) => x.length));
  return arr.map((x) => x.slice(0, shortest));
}
