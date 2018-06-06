import React from 'react';
import { connect } from 'react-redux';

const  mapStateToProps = function mapStateToProps(state){
  return { articles: state.articles }
}

//same as
// function mapStateToProps(state) {
//  return { articles: state.articles };
//};

//the component gets the prop articles  which
//is a copy of the articles array. the array lives in
//the redux state and comes from the reducer
const ConnectedList = ( {articles} )=> (
  <ul className="list-group list-group-flush">
    {articles.map (article => (
        <li className="list-group-item" key={article.id}>
        {article.title}
      </li>
    ))}
  </ul>
)
//connect List to state with mapStateToProps
const List = connect(mapStateToProps)(ConnectedList)
export default List;
