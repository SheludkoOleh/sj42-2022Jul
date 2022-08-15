//https://www.codewars.com/kata/559f3e20f4f29869cf0000ea/train/javascript

const OrderPeople = function (people) {
  return people.sort((a, b) => a.age - b.age);
};

//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr) {
  return [
    ...arr.filter((item) => item !== 0),
    ...arr.filter((item) => item === 0),
  ];
}
