import { Component } from 'react';
import PropTypes from 'prop-types';

import { Modal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    activeImageIdx: 0,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  setActiveIdx = idx => {
    this.setState({ activeImageIdx: idx });
  };

  render() {
    const { imagesName } = this.props;
    const { showModal, activeImageIdx } = this.state;

    return (
      <>
        {imagesName &&
          imagesName.hits.map((item, idx) => (
            <li className="imageGalleryItem" key={item.id}>
              <img
                onClick={() => {
                  this.setActiveIdx(idx);
                  this.toggleModal();
                }}
                src={item.webformatURL}
                alt={item.tags}
                className="imageGalleryItem-image"
              />
            </li>
          ))}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            {imagesName.hits[activeImageIdx].largeImageURL}
          </Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
};
