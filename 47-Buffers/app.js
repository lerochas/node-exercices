var buf = new Buffer.from('Hello', 'utf8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[4]);

buf.write('leandro');
console.log(buf.toString());