# ReduxSimpleStarter

### Getting Started

install Redux
```
npm i redux --save-dev

```

```
> npm install
> npm start
```
--> Redux holds up the state within a single location.
--> with Redux the logic for fetching and managing the state lives outside React.


CONSIDER USING REDUX when ...
1. multiple components need access to same state but do not have parent/child rel.
2. it feels cumbersome passing down state to multiple components with props


just basics
`STORE` to orchestrate all the moving parts of Redux
state of whole app lives in `store`

the `REDUCERS` produce the `STATE`. In Redux, the state must return entirely from reducers. REDUCERS are just JS functions, take two parameters
1. the current STATE
2. an ACTION

Redux reducers are without doubt the most important concept in Redux. Reducers produce the state of the application.

But how does a reducer know when to produce the next state?

the only way to change the state is by sending a signal to the store. this signal is an action `DISPATCHING AN ACTION` is the process of sending out a signal

Redux ACTIONS are just JS Objects
`ex {
  type: 'ADD ARTICLE',
  payload: (name: 'React, Redux Jawn', id: 1)
}`

every action needs a `TYPE` property to describe how the state will change

you can specify `payload` too as in example above

--> a REDUCER, for example, will add the article to the current state later

AVOIDING MUTATIONS IN Redux
1. Using concat(), slice(), and ...spread for arrays
2. Using Object.assign() and ...spread for objects, // Merge an object with object assign example:
`// Merge an object
let first = {name: 'Tony'};
let last = {lastName: 'Stark'};
let person = Object.assign(first, last);
console.log(person);
// {name: 'Tony', lastName: 'Stark'}
console.log(first);
// first = {name: 'Tony', lastName: 'Stark'} as the target also changed`


tip: you can combine reducers with redux function:
`combineReducers`


you can learn the basics of redux here like i did:
https://www.codementor.io/valentino/react-redux-tutorial-for-beginners-learning-redux-in-2018-fek71ojgh
