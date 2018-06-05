import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addArticle } from '../actions/index';


const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  }
}

class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      title: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmitForm = this.handleSubmitForm.bind(this)

  }


handleChange(event){console.log(event.target.value)
  this.setState({ [event.target.id]: event.target.value })

}
handleSubmitForm(event){
  event.preventDefault()
  const { title } = this.state;
  const id = uuidv1();
  this.props.addArticle({ title,id})//action gets dispatched
  this.setState({title: ''})
}

render() {
  const { title } = this.state;

  return(
    <form onSubmit={this.handleSubmitForm}>
      <div className="form-group">

      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={this.handleChange}
      />
    </div>
    <button type="submit" className="btn btn-success btn-lg">
      SAVE
    </button>

    </form>


  )
}

}
//component gets exported as Form which
//is result of connecting ConnectedForm w Redux store
//first arg for connect is null when `mapStateToProps`
//is absent
const Form = connect(null, mapDispatchToProps)(ConnectedForm)
export default Form;
