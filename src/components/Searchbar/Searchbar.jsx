import { Component } from 'react';
import { toast } from 'react-toastify';

import { ReactComponent as MyIcon } from '../../icon/search.svg';
import s from './Searchbar.module.css';

class Form extends Component {
  state = {
    input: '',
  };

  handleChange = e => {
    this.setState({ input: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.input.trim() === '') {
      toast.error('Enter a request');
      return;
    } else {
      this.props.onSubmit(this.state.input);
      this.setState({ input: '' });
    }
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <input
            className={s.input}
            type="text"
            name="input"
            value={this.state.input}
            onChange={this.handleChange}
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
}

export default Form;
