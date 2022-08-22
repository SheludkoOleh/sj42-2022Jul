//https://www.codewars.com/kata/547c71fdc5b2b38db1000098/train/javascript
function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  return (this.name = `${first} ${last}`);
}


//https://www.codewars.com/kata/547f1a8d4a437abdf800055c/train/javascript

function NamedOne(first, last) {
  return {
    firstName: first,
    lastName: last,
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(newName) {
      let [firstName, lastName] = newName.split` `;
      if (lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
      }
    },
  };
}
