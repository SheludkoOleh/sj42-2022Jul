//https://www.codewars.com/kata/52b50a20fa0e77b304000103/train/javascript
const isSantaClausable = (obj) => {
  const trueSanta = ["sayHoHoHo", "distributeGifts", "goDownTheChimney"];
  return trueSanta.every((i) => typeof obj[i] === "function");
};


//https://www.codewars.com/kata/52e5e86b2ff32887280002e4/train/javascript

class Cylon {
  constructor(model) {
    this.model = model;
  }
  attack() {
    return "Destroy all humans!";
  }
}

class HumanSkin extends Cylon {
  constructor(model) {
    super(model);
  }
  infiltrate() {
    return "Infiltrate the colonies";
  }
}

//https://www.codewars.com/kata/write-javascripts-call-function-using-apply

Function.prototype.call = function (obj, ...arr) {
  return this.apply(obj, arr)
}
