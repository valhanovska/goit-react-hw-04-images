import { Component } from 'react';
import Modal from '../Modal';

import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <>
        <li className={s.item}>
          <img
            className={s.image}
            src={this.props.webformatURL}
            alt={this.props.tags}
            onClick={this.toggleModal}
          />
        </li>

        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.props.largeImageURL} alt={this.props.tags} />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
