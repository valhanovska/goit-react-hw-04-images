import { Component } from 'react';
import { api } from '../services/api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from '../components/Searchbar';
import ImageGallery from '../components/ImageGallery';
import Loader from '../components/Loader';
import Button from '../components/Button';

import s from './App.module.css';

export class App extends Component {
  state = {
    images: [],
    input: '',
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { input, page } = this.state;
    if (prevState.input !== input) {
      this.setState({ loading: true });
      api
        .fetchGallery(input, page)
        .then(({ data }) => this.setState({ images: data.hits }))
        .finally(() => this.setState({ loading: false }));
    }
    if (prevState.page !== page && page !== 1) {
      this.setState({ loading: true });
      api
        .fetchGallery(input, page)
        .then(({ data }) =>
          this.setState({ images: [...prevState.images, ...data.hits] })
        )
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleFormSubmit = input => {
    this.setState({ input, page: 1 });
  };

  handleClickButton = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images } = this.state;
    return (
      <div className={s.app}>
        <Form onSubmit={this.handleFormSubmit} />
        {this.state.loading && <Loader />}
        {images.length !== 0 && <ImageGallery images={images} />}
        {images.length !== 0 && <Button onClick={this.handleClickButton} />}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
