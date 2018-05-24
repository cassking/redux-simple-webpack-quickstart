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

just basics
STORE to orchestrate all the moving parts of Redux
state of whole app lives in store

the REDUCERS produce the STATE. In Redux, the state must return entirely from reducers. REDUCERS are just JS functions, take two parameters
1. the current STATE
2. an ACTION

Redux reducers are without doubt the most important concept in Redux. Reducers produce the state of the application.

But how does a reducer know when to produce the next state?

the only way to change the state is by sending a signal to the store. this signal is an action "DISPATCHING AN ACTION" is the process of sending out a signal

Redux ACTIONS are just JS Objects
ex {
  type: 'ADD ARTICLE',
  payload: (name: 'React, Redux Jawn', id: 1)
}

every action needs a TYPE property to describe how th state will change

you can specify payload too as in example above

a REDUCER, for example, will add the article to the current state later
