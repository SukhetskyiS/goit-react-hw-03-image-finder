import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class ImageGallery extends Component {
  render() {
    return (
      <>
        <ul className="imageGallery">
          <ImageGalleryItem imagesName={this.props.imagesName} />
          <Loader />
        </ul>
        <Button />
        <Modal />
      </>
    );
  }
}
