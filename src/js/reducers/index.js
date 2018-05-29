//src/js/reducers/index.js
// simple reducer taking the initial
// state as the first parameter.
//As a second parameter --> action.
import { ADD_ARTICLE }   from '../constants/action-types'

const initialState = (
  articles: []
)

const rootReducer = (state = initialState,action) => {
switch (action.type){
  case ADD_ARTICLE:
  //use concat instead of push ot keep array immutable
      return { ...state, articles: state.articles.concat(action.payload)}
    default:
      return state
  }

};

export default rootReducer;
