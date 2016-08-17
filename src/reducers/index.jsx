export var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
  case 'CHANGE_NAME':
    return action.name; //this is no longer object , we only care about name string
  default:
    return state;
  };
};

var nextHobbyId = 1;
export var hobbiesReducer = (state = [], action) => {
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

var nextMovieId = 1;
export var moviesReducer = (state = [], action) => {
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

export var mapReducer = (state = {isFetching: false, url: null}, action) => {
  switch (action.type) {
  case 'START_LOCATION_FETCH':
    return {
      isFetching: false,
      url: null
    };
  case 'COMPLETE_LOCATION_FETCH':
    return {
      isFetching: false,
      url: action.url
    };
  default:
    return state;
  }
}
