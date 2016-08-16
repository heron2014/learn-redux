var redux = require('redux');

console.log('starting redux example');

var reducer = (state = {name: 'Annonymous'}, action) => {
  // state = state || {name: 'Anonymous'}; //default value
  switch(action.type) {
    case 'CHANGE_NAME':
    return {
      ...state,
      name: action.name
    };
    default:
    return state;
  }
}

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

//create action which is an object with prop type..
var action = {
  type: 'CHANGE_NAME',
  name: 'Anita'
}

//dispatch action
store.dispatch(action); //you can add action object dynamicllay in dispatch method
console.log('name should be anita', store.getState());
