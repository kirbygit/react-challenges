// Explicit Binding
// call, apply, bind

// moved to a full function
var sayName = function(l1, l2, l3) {
  console.log('My name is ' + this.name +
             ' and I know ' + l1 + ', ' + l2 + ' and ' + l3 + '.' );
};

var stacey = {
  name: 'Stacey',
  age: 35
};

var languages = ['Javascript', 'Ruby', 'C++'];

// call the sayName function inside stacey
// stacey.sayName();
sayName.call(stacey, languages[0], languages[1], languages[2]);

// exact same thing as call but instead of parsing it an array one by one
// it parses everything for us
sayName.apply(stacey, languages);

// returns a new function instead of invoking the original function
// then we call the new function/invoke the new function later
var newFn = sayName.bind(stacey, languages[0], languages[1], languages[2]);
console.log('HERE');
newFn();
