import { Component } from 'react';
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
    const activeTab = imagesName.hits[activeImageIdx];

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
          <Modal onClose={this.toggleModal}>{activeTab.largeImageURL}</Modal>
        )}
      </>
    );
  }
}
