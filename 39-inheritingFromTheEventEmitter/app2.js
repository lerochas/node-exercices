var util = require('util');

function Person() {
  this.firstName = 'Leandro';
  this.lastName = 'Rocha';
}

Person.prototype.greet = function () {
  console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

function Policeman() {
  Person.call(this);
  this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();

//emily
//lucro e soluções
//berrini - hibrido - CLT
//full stack - javascript 