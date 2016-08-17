Redux notes (WIP)

#### Reducers

Reducers are **pure functions**.
- output is the same as input (predictable)
- no side effects, can't pass any values from outside the function etc..
- no sync methods, callbacks., promises etc

```js

let stateDefault = 0;

let reducer = (state = stateDefault, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state -1
  default:
    return state;
  }
}

// don't use any modification methods to change original values, they can only return new values
// return state += 1 //not allowed
```

#### Multiple Reducers

Break reducer into more managable small reducers

```js
var reducer = redux.combineReducers({
  name: nameReducer, //we tell redux that the state name will be managed by nameReducer
  hobbies: hobbiesReducer, // we tell redux that state - hobbies will be managed by hobbiesReducer
  movies: moviesReducer
});

```
#### Actions
- pure plain object, with required property **type**

```js
export var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
};
```

- dispatch an action

```js
store.dispatch(changeName('Anita'));

```

#### Subscribe for changes

Subscribe takes one argument which is callback that gets called when the state has been changed

```js
store.subscribe(() => {
  var state = store.getState();

  console.log('New state', store.getState());
});

```

#### Redux Dev Tools

- add redux dev tool extension in Chrome
- enable redux dev tool in your application

```js
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() :  f => f
));

```  
#### Creating actions generator

Action generator takes only arguments that we want to change (we don't need to pass : type ). It is a simple function that returns an object.
- example:

```js
let changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
}
//dispatch an action
store.dispatch(changeName('Anita'));

```

#### Asynchronous actions (use redux-thunk)

```js
var mapReducer = (state = {isFetching: false, url: null}, action) => {
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

var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  }
}

var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  }
}

var fetchLocation = () => {
  store.dispatch(startLocationFetch());

  axios.get('http://ipinfo.io').then(function(res) {
    var loc = res.data.loc;
    var baseUrl = `http://maps.google.com?q=${loc}`;

    store.dispatch(completeLocationFetch(baseUrl));
  });
}

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


fetchLocation();

```

#### Redux-thunk

We can use redux-thunk, which is middleware to add actions generator which returns functions. The reason we do that if the action is doing some asynchronous request and needs to dispatch action inside of it.
Redux-thunk is a way to have your app use async actions - that is, ones that you start off but will complete 'later' - you'll then normally want to dispatch an action but the problem then is that the 'later' function doesn't have access to the dispatch method.  You can pass the dispatch method around manually, but redux-thunk provides a way of it being provided for you.  See the redux [docs](http://redux.js.org/docs/advanced/AsyncActions.html) and [stackoverflow](http://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559) for more info, but the video should be enough to get things started if/when you need it.
