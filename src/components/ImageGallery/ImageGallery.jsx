import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';

export class ImageGallery extends Component {
  state = {
    images: '',
    per_page: 12,
    page: 1,
    key: '30861535-cdc54152077bdd8a811539b9b',
    API: 'https://pixabay.com/api/',
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { imagesName } = this.props;
    const { per_page, key, API, page } = this.state;

    if (
      prevProps.imagesName !== imagesName ||
      prevState.per_page !== per_page
    ) {
      this.setState({ loading: true });

      fetch(
        `${API}?q=${imagesName}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${per_page}`
      )
        .then(res => res.json())
        .then(images => this.setState({ images }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleMore = () => {
    this.setState(({ per_page }) => ({ per_page: per_page + 12 }));
  };

  render() {
    const { loading, images } = this.state;

    return (
      <>
        {loading && <Loader />}
        <ul className="imageGallery">
          <ImageGalleryItem imagesName={images} />
        </ul>
        {images && <Button onAddImg={this.handleMore} />}
      </>
    );
  }
}
