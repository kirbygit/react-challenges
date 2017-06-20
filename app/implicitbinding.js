const Me = {
  name: 'Kirby',
  age: '18',
  sayName: function() {
    console.log(this.name);
  }
};

var sayNameMixin = function(obj) {
  obj.sayName = function() {
    console.log('My name: ' + this.name);
    console.log('My age: ' + this.age);
  }
};

var me = {
  name: 'Kirby',
  age: '18'
};

var you = {
  name: 'James',
  age: '18'
};

var Person = function(name, age) {
  return {
    name: name,
    age: age,
    sayName: function() {
      console.log(this.name);
    },
    mother: {
      name: 'Stacey',
      sayName: function() {
        console.log(this.name);
      }
    }
  };
};

// refer left of the dot and that
// keyword is the reference of the function
var jim = Person('jim', 42);
jim.sayName();
jim.mother.sayName();

// refer left of the dot and that
// keyword is the reference of the function
Me.sayName();

// chose an obj as an argument
sayNameMixin(me);
sayNameMixin(you);

me.sayName();
you.sayName();
