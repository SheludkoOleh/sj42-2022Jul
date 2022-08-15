//https://www.codewars.com/kata/540de1f0716ab384b4000828/train/javascript

function spread(func, args) {
  return func(...args);
}


//https://www.codewars.com/kata/for-the-sake-of-argument

const numbers = (...arg) => {
  return arg.every((el) => typeof el === "number");
};
