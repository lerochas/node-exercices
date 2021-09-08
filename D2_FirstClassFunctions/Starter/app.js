//function statement
function greet(){
  console.log('hi');
}
greet();

//functions are fist-class
function logGreeting(fn){
  fn();
}
logGreeting(greet);

//function expression
const greetMe = function() {
  console.log('Hi Leandro');
}
greetMe();

//it's first-class
logGreeting(greetMe);

//use a function expression on the fly
logGreeting(function(){
  console.log('Hello Leandro!');
});