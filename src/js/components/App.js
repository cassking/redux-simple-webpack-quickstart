import React from 'react';
import List from './List';
import Form from './Form';
//we want list to get a list of Articles
//so we need to connect state.articles with component
//we use mapStateToProps
const App = () => (
  <div className="row mt-5">
    <div className="col-sm-4 offset-md-1">
      <h2>Articles/Phrases</h2>
      <List />
      {/* will interact with the Redux store */}
      {/* we need to 'connect' List to store with mapStateToProps */}
</div>
<div className="col-md-4 offset-md-1">
    <h2>Add a New Phrase here: </h2>
    <Form />
  </div>
  </div>
);

export default App;
