function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.greet = function(){
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

const leandro = new Person('Leandro', 'Rocha');
leandro.greet();

const leonardo = new Person('Leonardo', 'Souza');
leonardo.greet();

console.log(leandro.__proto__ === leonardo.__proto__);