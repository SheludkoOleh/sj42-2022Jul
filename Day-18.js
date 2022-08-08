//https://www.codewars.com/kata/573156709a231dcec9000ee8/train/javascript

function tailAndHead(arr) {
  const num = [];
  for (let i = 0; i < arr.length - 1; i++)
    num.push((arr[i] % 10) + Number((arr[i + 1] + "")[0]));
  return num.reduce((a, b) => a * b);
}


//https://www.codewars.com/kata/5732b0351eb838d03300101d/train/javascript

function blackAndWhite(arr) {
  return !Array.isArray(arr) ? "It's a fake array" : arr.includes(5)&&arr.includes(13)?"It's a black array":"It's a white array";
}

//https://www.codewars.com/kata/5735956413c2054a680009ec/train/javascript

function rndCode() {
  let str = "";
  let strcode = "ABCDEFGHIJKLM";
  let numcode = "0123456789";
  let signcode = "~!@#$%^&*";

  for (let i = 0; i < 2; i++) {
    str += strcode[~~(Math.random() * strcode.length)];
  }
  for (let i = 0; i < 4; i++) {
    str += numcode[~~(Math.random() * numcode.length)];
  }
  for (let i = 0; i < 2; i++) {
    str += signcode[~~(Math.random() * signcode.length)];
  }
  return str;
}
