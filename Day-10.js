//https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript

const alienLanguage = (str) =>
  str.toUpperCase().replace(/\w\b/g, (x) => x.toLowerCase());




//https://www.codewars.com/kata/57284d23e81185ae6200162a/train/javascript
function topSecret(str) {
  const chars = str.split("");
  for (let i = 0; i < chars.length; i++) {
    let tmp = chars[i].charCodeAt();
    if ((tmp > 67 && tmp < 91) || (tmp > 99 && tmp < 123)) tmp -= 3;
    else if ((tmp < 68 && tmp > 64) || (tmp < 100 && tmp > 96)) tmp += 23;

    chars[i] = String.fromCharCode(tmp);
  }
  return chars.join("");
}


//question1: The top secret file number is...
answer1="3761";
//question2: Super agent's name is...
answer2="FcOT";
//question3: He stole the treasure is...
answer3="Expired biscuits";



//https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript
function fiveLine(s) {
  s = s.trim();
  return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
}
