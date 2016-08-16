var redux = require('redux');

// Name reducer and action generator
// ----------------------
var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
  case 'CHANGE_NAME':
    return action.name; //this is no longer object , we only care about name string
  default:
    return state;
  };
};

var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
};
// Hobbies reducer and action generator
// ----------------------
var nextHobbyId = 1;
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

var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
};

var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
};

// Movies reducer and action generator
// ----------------------
var nextMovieId = 1;
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

var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  }
}

var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
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

store.dispatch(changeName('Anita'));

store.dispatch(addHobby('Running'));

store.dispatch(addHobby('Walking'));

store.dispatch(addMovie('Suits', 'tv-show'));

store.dispatch(addMovie('Mad Max', 'action'));

store.dispatch(changeName('Emily'));

store.dispatch(removeMovie(2));

store.dispatch(removeHobby(2));
