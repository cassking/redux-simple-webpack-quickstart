//src/js/store/index.js

import { createStore } from 'redux';
import rootReducer from "../reducers/index"
// createStore takes a reducer 
// as the first argument, rootReducer


const store = createStore(rootReducer)
export default store;
