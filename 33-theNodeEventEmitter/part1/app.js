var emitter = require('./emitter');

emitter.on('greet', function() {
  console.log('Somewhere, someone said hello.');
});

emitter.on('greet', function() {
  console.log('A greeting occurred!');
});

emitter.on('name', function() {
  console.log('Leandro');
});

emitter.on('name', function() {
  console.log('Rocha');
});

console.log('Hello!');
emitter.emit('greet');