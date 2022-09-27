import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

import s from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className={s.gallery}>
        {images.map(({ webformatURL, largeImageURL, tags, id }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
};

export default ImageGallery;
