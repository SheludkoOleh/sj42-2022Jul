//https://www.codewars.com/kata/53d4eec01f1a9b3020000786/train/javascript
name = "The Window";

const alpha = {
  name: "My Alpha",
  getNameFunc: function () {
    return function () {
      return alpha.name;
    };
  },
};

//https://www.codewars.com/kata/559f3123e66a7204f000009f/train/javascript
const ArrowFunc = function (arr) {
  return arr.map((el) => String.fromCharCode(el)).join("");
};
