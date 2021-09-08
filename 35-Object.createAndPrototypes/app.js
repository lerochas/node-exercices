var person = {
  firstName: '',
  lastName: '',
  greet: function () {
    return this.firstName + ' ' + this.lastName;
  }
}

var leandro = Object.create(person);
leandro.firstName = 'Leandro';
leandro.lastName = 'Rocha';

var jessica = Object.create(person);
jessica.firstName = 'Jéssica';
jessica.lastName = 'Andrade';

console.log(leandro.greet());
console.log(jessica.greet());