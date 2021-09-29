import { useState, useEffect } from 'react';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

import { v4 as uuidv4 } from 'uuid';
import './App.css';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const formSubmitHandler = newContact => {
    console.log(newContact);

    const contactExist = contacts.find(
      elem => newContact.name.toLowerCase() === elem.name.toLowerCase(),
    );

    if (contactExist) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      const contact = {
        id: uuidv4(),
        name: newContact.name,
        number: newContact.number,
      };

      setContacts(prevState => [contact, ...prevState]);
    }
  };

  return (
    <>
      <div>
        <Container>
          <h1 className="title">Phonebook</h1>
          <ContactForm onSubmit={formSubmitHandler} />

          <h2 className="title">Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contacts={getVisibleContacts()}
            onDeleteContact={deleteContact}
          />
        </Container>
      </div>
    </>
  );
}
