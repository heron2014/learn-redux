var redux = require('redux');

console.log('starting redux example');

// pure function
function add(a, b) {
  return a + b;
}

// non pure functions
var a = 3;
function add2(b) {
  return a + b;
}

var result; // side effect
function add3(a,b) {
  result = a + b;
  return result;
}

function add4(a, b) {
  return a + b + new Date().getSeconds();
}


//pure function dont allow modify, update the passed values

function changeProp(obj) {
  // obj.name = 'Aza';
  // return obj;

  return {
    ...obj,
    name: 'Aza'
  }
}

//we dont want to modify the starting obj
var startingObj = {
  name: 'Rocky',
  age: 2
}

var res = changeProp({startingObj});
console.log('starting', startingObj);
console.log('res', res);
