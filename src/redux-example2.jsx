var redux = require('redux');

var actions = require('./actions');
var store = require('./store/configureStore').configure();

store.subscribe(() => {
  var state = store.getState();

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...'
  } else if(state.map.url) {
    document.getElementById('app').innerHTML = `<a href="${state.map.url}" target="_blank">View your location</a>`
  }
  // document.getElementById('app').innerHTML = state.name;
  console.log('New state', store.getState());
});

var currentState = store.getState();
console.log('current state', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Anita'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.addMovie('Suits', 'tv-show'));

store.dispatch(actions.addMovie('Mad Max', 'action'));

store.dispatch(actions.changeName('Emily'));

store.dispatch(actions.removeMovie(2));

store.dispatch(actions.removeHobby(2));
