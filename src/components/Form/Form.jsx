import { useState } from 'react';
import css from './Form.module.css';
import PropTypes from 'prop-types';

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNamber] = useState('');

  const handleChenge = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNamber(value);
        break;
      default:
        break;
    }
  };

  const hendleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });

    setName('');
    setNamber('');
  };

  return (
    <form className={css.phonebookForm} onSubmit={hendleSubmit}>
      <label className={css.label}>
        <p>Name:</p>
        <input
          className={css.input}
          type="text"
          name="name"
          onChange={handleChenge}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        <p>Namber:</p>
        <input
          className={css.input}
          type="tel"
          name="number"
          onChange={handleChenge}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
