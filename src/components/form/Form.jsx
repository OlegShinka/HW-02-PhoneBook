import { Component } from 'react';
import { nanoid } from 'nanoid';

const InitialState = {
  name: '',
  number: '',
};
class Form extends Component {
  state = { ...InitialState };

  //  приймає дані з інпуту
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  //слухач події на формі Створює новий контакт
  handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      ...this.state,
    };

    this.props.addContact(newContact);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      ...InitialState,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div style={{ display: 'flex' }}>
          <label>Name</label>
          <input
            name="name"
            value={this.state.name}
            type="text"
            onChange={this.handleChange}
          />
          <label>Number</label>
          <input
            name="number"
            value={this.state.number}
            type="tel"
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Add </button>
      </form>
    );
  }
}

export default Form;
