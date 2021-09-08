const person = {
  firstName: 'Leandro',
  lastName: 'Rocha',
  greet: function() {
    console.log('Hello, ' + this.firstName + ' ' + this.lastName);
  }
};

person.greet();

console.log(person['firstName']);