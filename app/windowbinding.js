// new Binding
var Animal = function (color, name, type) {
  this.color = color;
  this.name = name;
  this.type = type;
};

var zebra = new Animal('black and white', 'Zorro', 'Zebra');
console.log(zebra);

// window Binding

var sayAge = function() {
  'use strict';
  console.log(this.age);
};

var me = {
  age: 25
};

// using strict will cause an error
sayAge();
window.age = 35;
sayAge();
