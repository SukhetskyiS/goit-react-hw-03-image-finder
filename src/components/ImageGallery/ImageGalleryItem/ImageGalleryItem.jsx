import { Component } from 'react';
import { Modal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  render() {
    const { imagesName } = this.props;

    return (
      <>
        {imagesName &&
          imagesName.hits.map(item => (
            <li className="imageGalleryItem" key={item.id}>
              <img
                src={item.webformatURL}
                alt={item.webformatURL}
                className="imageGalleryItem-image"
              />
            </li>
          ))}
        {imagesName && <Modal largeImage={imagesName.hits.largeImageURL} />}
      </>
    );
  }
}
