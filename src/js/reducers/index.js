

//src/js/reducers/index.js
// simple reducer taking the initial
// state as the first parameter.
//As a second parameter --> action.
import { ADD_ARTICLE }   from '../constants/action-types'
import { DELETE_ARTICLE }   from '../constants/action-types'

const initialState = {
  articles: []
}

//can also be (state = [], action)
const rootReducer = (state = initialState,action) => {
switch (action.type){
  case ADD_ARTICLE:
  //use concat instead of push ot keep array immutable
  //return state.concat([action.payload]);
  return { ...state, articles: state.articles.concat(action.payload)}

  case DELETE_ARTICLE:
  return { ...state, article: state.filter((article)=>article.id !== action.id)}

    default:
      return state

  }

};

export default rootReducer;
