var fs = require('fs');

// // __dirname is the whole path to the file. need this because its a .txt and is in binary data. Sync is run synchronously
// var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
// console.log(greet)

// // fs.readFile is asynchronous
// var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data){ // error first callback. without utf8, will return a binary code data
//   console.log(data)
// })

// console.log("done!") // will come out before the async call.

// // ** always use async if possible **

var readable = fs.createReadStream(__dirname + '/greet.txt', {encoding: 'utf8', highWaterMark: 16 * 1024}); // highWaterMark is used if we want to custom the size of the chunks

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt')

//stream will fill out the buffer and emit event 'data'
readable.on('data', function(chunk) {
  console.log(chunk)
  writable.write(chunk)
})
