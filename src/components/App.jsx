import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    imagesName: '',
    per_page: 12,
  };

  hasFormSubmit = imagesName => {
    this.setState({ imagesName });
  };

  render() {
    return (
      <div className="app">
        <Searchbar onSubmit={this.hasFormSubmit} />
        <ImageGallery imagesName={this.state.imagesName} />
        {/* <ToastContainer /> */}
      </div>
    );
  }
}
