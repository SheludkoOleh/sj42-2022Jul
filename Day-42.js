//https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

function scramble(chars, word) {
  let letterHolder = {};
  let possibility = true;
  
  for (const char of chars) {
    letterHolder[char] ? letterHolder[char]++ : letterHolder[char] = 1;
  }
  
  for (const letter of word) {
    !letterHolder[letter] ? possibility = false : letterHolder[letter]--;
  }
  
  return possibility;
}
