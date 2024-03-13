import { Component } from 'react';
import Form from './form/Form';
import ListContacts from './listContacts/ListContacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  addContact = newContact => {
    this.setState(prev => ({ contacts: [...prev.contacts, newContact] }));
    console.log('newContact :>> ', newContact);
  };
  render() {
    return (
      <div>
        <Form addContact={this.addContact} />
        <ListContacts list={this.state.contacts} />
      </div>
    );
  }
}

export default App;
