//https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript

function trueOrFalse(val) {
  if (val == false) {
    return "false";
  } else if (val == undefined) {
    return "false";
  } else if (val == null) {
    return "false";
  } else {
    return "true";
  }
}

//https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript

function saleHotdogs(n) {
  if (n < 5) {
    return 100 * n;
  } else if (n >= 5 && n < 10) {
    return 95 * n;
  } else if (n >= 10) {
    return 90 * n;
  }
}

//https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript

function howManydays(month) {
  switch (month) {
    case 2:
      return 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return 31;
  }
}
