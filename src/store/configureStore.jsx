var redux = require('redux');
var thunk = require('redux-thunk').default;
var {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require('../reducers');

export var configure = () => {
  var reducer = redux.combineReducers({
    name: nameReducer, //we tell redux that the state name will be manage by nameReducer
    hobbies: hobbiesReducer,
    movies: moviesReducer,
    map: mapReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
