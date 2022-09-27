import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from '../components/Searchbar';
import ImageGallery from '../components/ImageGallery';
import Loader from '../components/Loader';
import Button from '../components/Button';

import s from './App.module.css';

export function App() {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = input => {
    setInput(input);
    setPage(1);
  };

  const handleClickButton = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (input !== '' && page === 1) {
      setLoading(true);
      api
        .fetchGallery(input, page)
        .then(({ data }) => setImages(data.hits))
        .finally(() => setLoading(false));
    }
    if (page !== 1) {
      setLoading(true);
      api
        .fetchGallery(input, page)
        .then(({ data }) => {
          setImages([...images, ...data.hits]);
        })
        .finally(() => setLoading(false));
    }
    // eslint-disable-next-line
  }, [input, page]);

  return (
    <div className={s.app}>
      <Form onSubmit={handleFormSubmit} />
      {loading && <Loader />}
      {images.length !== 0 && <ImageGallery images={images} />}
      {images.length !== 0 && <Button onClick={handleClickButton} />}
      <ToastContainer autoClose={3000} />
    </div>
  );
}
