var redux = require('redux');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action) => {

  switch(action.type) {
  case 'CHANGE_SEARCH_TEXT':
    return {
      ...state,
      searchText: action.searchText
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
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Walk a dog'
}

//dispatch action
store.dispatch(action);

console.log('new searchText is', store.getState());
