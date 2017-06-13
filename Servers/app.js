var http = require('http');
var fs = require('fs'); // deliver html to app.js

http.createServer(function(request, response) {

  response.writeHead(200, {'Content-Type': 'application/json'}); // status code, content type
  var obj = {
    firstname: 'John',
    lastname: 'Doe'
  };
  response.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1'); // port, ip address. in browser, look at localhost:1337



// var html = fs.readFileSync(__dirname + '/index.html', 'utf8'); // convert to string to manipulate and replace {Message}
// var message = "Hello world...";
// html = html.replace('{Message}', message)
// response.end(html); // send response back





// fs.createReadStream(__dirname + '/index.html').pipe(response); // pipe html to response stream
