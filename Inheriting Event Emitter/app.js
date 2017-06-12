var EventEmitter = require('events');
var util = require('util');

function Greetr() {
  this.greeting = "Hello world!";
}

util.inherits(Greetr, EventEmitter) // Greeter will have all the methods and properties of EventEmitter

Greetr.prototype.greet = function(data) { // can also create own method
  console.log(this.greeting + ": " + data);
  this.emit('greet', data) // inherits 'emit' from EventEmitter
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) { // inherits 'on' from EventEmitter
  console.log("Someone greeted!: " + data);
})

greeter1.greet('Sharon'); // gets method "greet" from Greetr. pass 'sharon' as data