React boilerplate

#### Reducers

Reducers are **pure functions**.
- output is the same as input (predictable)
- no side effects, can't pass any values outside the function etc..
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

Break reducer in to more managebale small reducers

```js
var reducer = redux.combineReducers({
  name: nameReducer, //we tell redux that the state name will be managed by nameReducer
  hobbies: hobbiesReducer, // we tell redux that state - hobbies will be managed by hobbiesReducer
  movies: moviesReducer
});

```

#### Subscribe fr changes

Subscribe takes one argument which is callback that gets called when the state has been changed

```js
store.subscribe(() => {
  var state = store.getState();

  // document.getElementById('app').innerHTML = state.name;
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

#### Asynchronous actions
