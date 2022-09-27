import { useState } from 'react';
import { toast } from 'react-toastify';

import { ReactComponent as MyIcon } from '../../icon/search.svg';
import s from './Searchbar.module.css';

function Form({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (input.trim() === '') {
      toast.error('Enter a request');
      return;
    } else {
      onSubmit(input);
      setInput('');
    }
  };

  return (
    <header className={s.searchbar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="input"
          value={input}
          onChange={handleChange}
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={s.button}>
          <MyIcon />
        </button>
      </form>
    </header>
  );
}

export default Form;
