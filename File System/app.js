var fs = require('fs');

// __dirname is the whole path to the file. need this because its a .txt and is in binary data. Sync is run synchronously
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet)

// fs.readFile is asynchronous
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data){ // error first callback. without utf8, will return a binary code data
  console.log(data)
})

console.log("done!") // will come out before the async call.

// ** always use async if possible **

