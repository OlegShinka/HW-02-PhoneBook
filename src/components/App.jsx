import { Component } from 'react';
import Form from './form/Form';
import ListContacts from './listContacts/ListContacts';
import { Filter } from './filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione', number: '443-89-12' },
      { id: 'id-3', name: 'Eden', number: '645-17-79' },
      { id: 'id-4', name: 'Annie', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = newContact => {
    const checkContact = this.state.contacts.find(item => {
      return item.name.toLowerCase() === newContact.name.toLowerCase();
    });

    if (checkContact) {
      alert(`${newContact.name} is already in contacts list !`);
      return;
    } else {
      this.setState(prev => ({ contacts: [...prev.contacts, newContact] }));
    }
  };

  onChangeFilter = value => {
    // Видаляємо зайві пробіли з початку та кінця фільтру
    const valueTrim = value.trim();
    this.setState({ filter: valueTrim });
  };

  onDelContact = id => {
    this.setState(prev => ({
      // фільтр повертає тільки те що влаштовує умові
      contacts: prev.contacts.filter(item => item.id !== id),
    }));
  };

  onContact = filter => {
    if (filter === '') {
      return this.state.contacts;
    } else {
      return this.state.contacts.filter(item => {
        // приводимо до нижнього регістру ім'я юзера та символи введені у інпуті фільтра
        return item.name.toLowerCase().includes(filter.toLowerCase());
      });
    }
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <Form addContact={this.addContact} />

        <ListContacts
          list={this.onContact(filter)}
          onDelete={this.onDelContact}
        />

        <Filter onChangeFilter={this.onChangeFilter} filter={filter} />
      </div>
    );
  }
}

export default App;
