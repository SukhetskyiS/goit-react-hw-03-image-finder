import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    images: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imagesName !== this.props.imagesName) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.imagesName}&page=1&key=30861535-cdc54152077bdd8a811539b9b&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(images => this.setState({ images }));
    }
  }

  render() {
    return (
      this.state.images &&
      this.state.images.hits.map(item => (
        <li className="imageGalleryItem">
          <img
            src={item.previewURL}
            alt={item.previewURL}
            className="imageGalleryItem-image"
          />
        </li>
      ))
    );
  }
}
