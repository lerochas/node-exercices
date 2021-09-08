var Emitter = require('events');
var configEvents = require('./config').events;
var emtr = new Emitter();

emtr.on(configEvents.GREET, function() {
  console.log('Somewhere, someone said hello.');
});

emtr.on(configEvents.GREET, function() {
  console.log('A greeting occurred!');
});

emtr.on(configEvents.NAME, function() {
  console.log('Leandro');
});

emtr.on(configEvents.NAME, function() {
  console.log('Rocha');
});

console.log('Hello!');
emtr.emit(configEvents.NAME);