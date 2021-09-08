/*
  PIPE: connecting two streams by writing to one stream
  what is being read from another
*/
var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');
var writeble = fs.createWriteStream(__dirname + '/greetcopy.txt');
var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');
var gzlib = zlib.createGzip();

readable.pipe(writeble);
readable.pipe(gzlib).pipe(compressed);
