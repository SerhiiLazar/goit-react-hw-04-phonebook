import { useState, useEffect } from 'react';
import Contacts from './Contacts';
import { nanoid } from 'nanoid';
import Section from './Section';
import Form from './Form';
import css from './App.module.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });

  useEffect(() => {
    if (contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    console.log('name', name, number);
    const livContacts = contacts.map(contact => contact.name);
    if (livContacts.includes(name)) {
      alert(`Contact "${name}" is already exist.`);
      return;
    }
    setContacts(state => [...state, { id: nanoid(), name, number }]);
  };

  const onDelete = deleteId => {
    setContacts(contact => contact.filter(({ id }) => id !== deleteId));
  };
  return (
    <div className={css.appBody}>
      <Section title="Phonebook">
        <Form onSubmit={formSubmitHandler} />
      </Section>
      <Section title="Contacts">
        <Contacts contacts={contacts} onClickDelete={onDelete} />
      </Section>
    </div>
  );
}

export default App;
