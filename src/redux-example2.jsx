var redux = require('redux');

var stateDefault = {
  name: 'Annonymous',
  hobbies: [],
  movies: []
}

var nextHobbyId = 1;
var nextMovieId = 1;
// var oldReducer = (state = stateDefault, action) => {
//
//   switch (action.type) {
//   case 'CHANGE_NAME':
//     return {
//       ...state,
//       name: action.name
//     };
//   case 'ADD_HOBBY':
//     return {
//       ...state,
//       hobbies: [
//         ...state.hobbies,//current hobbies
//         {
//           id: nextHobbyId++,
//           hobby: action.hobby
//         }
//       ]
//     };
//   case 'ADD_MOVIE':
//     return {
//       ...state,
//       movies: [
//         ...state.movies,
//         {
//           id: nextMovieId++,
//           title: action.title,
//           genre: action.genre
//         }
//       ]
//     };
//   case 'REMOVE_MOVIE':
//     return {
//       ...state,
//       movies: state.movies.filter(movie => movie.id !== action.id)
//     };
//   case 'REMOVE_HOBBY':
//     return {
//       ...state,
//       hobbies: state.hobbies.filter(hobby => hobby.id !== action.id)
//     }
//   default:
//     return state;
//   }
// }

var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
  case 'CHANGE_NAME':
    return action.name; //this is no longer object , we only care about name string
  default:
    return state;
  };
};

var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_HOBBY':
    return [
      ...state,//current hobbies, we know that state represent hobbies array
      {
        id: nextHobbyId++,
        hobby: action.hobby
      }
    ];
  case 'REMOVE_HOBBY':
    return state.filter(hobby => hobby.id !== action.id);
  default:
    return state;
  }
};

var moviesReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_MOVIE':
    return [
      ...state,
      {
        id: nextMovieId++,
        title: action.title,
        genre: action.genre
      }
    ];
  case 'REMOVE_MOVIE':
    return state.filter(movie => movie.id !== action.id)
  default:
    return state;
  }
};

var reducer = redux.combineReducers({
  name: nameReducer, //we tell redux that the state name will be manage by nameReducer
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.subscribe(() => {
  var state = store.getState();

  document.getElementById('app').innerHTML = state.name;
  console.log('New state', store.getState());
});

var currentState = store.getState();
console.log('current state', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'anita'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'eating'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Suits',
  genre: 'tv-show'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Mad Max',
  genre: 'action'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 2
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});
