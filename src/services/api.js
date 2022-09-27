import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29460446-646a6c5f479745235ebffad02';
const OPTIONS = 'image_type=photo&orientation=horizontal&per_page=12';

const fetchGallery = async (guery, page) => {
  try {
    const URL = `${BASE_URL}?q=${guery}&page=${page}&key=${API_KEY}&${OPTIONS}`;
    const data = await axios.get(URL);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const api = {
  fetchGallery,
};
