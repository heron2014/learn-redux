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

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.subscribe(() => {
  var state = store.getState();

  document.getElementById('app').innerHTML = state.searchText;
});


//create action which is an object with prop type..
var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Walk a dog'
}

var action2 = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Wash the cat'
}
//dispatch action
store.dispatch(action);
store.dispatch(action2);
