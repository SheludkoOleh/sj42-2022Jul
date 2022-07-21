// https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript

function padIt(str,n){
  while(n>0){
    if(n%2 === 0) {
      str = str + "*";
    }else{
      str = "*" + str;
    }
    n --;
  }
  return str;
}




// https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript

function pickIt(arr) {
  let odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else odd.push(arr[i]);
  }
  return [odd, even];
}




// https://www.codewars.com/kata/5721c189cdd71194c1000b9b

function grabDoll(dolls) {
  let bag = [];
  for (i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i]);
      if (bag.length === 3) break;
    } else {
      continue;
    }
  }
  return bag;
}



// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript

function giveMeFive(obj) {
  const arr = [];
  for (const key in obj) {
    if (key.length === 5) {
      arr.push(key);
    }
    if (obj[key].length === 5) {
      arr.push(obj[key]);
    }
  }
  return arr;
}
