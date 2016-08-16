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

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() :  f => f
));

var currentState = store.getState();
console.log('currentState', currentState);

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('Name is ', state.name);
});

//create action which is an object with prop type..
var action1 = {
  type: 'CHANGE_NAME',
  name: 'Anita'
}

var action2 = {
  type: 'CHANGE_NAME',
  name: 'Ewa'
}

//dispatch action
store.dispatch(action1); //you can add action object dynamicllay in dispatch method
// unsubscribe();
store.dispatch(action2)
