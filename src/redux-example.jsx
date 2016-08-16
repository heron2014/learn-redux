var redux = require('redux');

console.log('starting redux example');

var reducer = (state = {name: 'Annonymous'}, action) => {
  // state = state || {name: 'Anonymous'}; //default value
  return state;
}

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState); 
