import { Component } from 'react';
// import { ToastContainer } from 'react-toastify';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    imagesName: '',
  };

  hasFormSubmit = imagesName => {
    this.setState({ imagesName });
  };

  render() {
    return (
      <div
        className="app"
        // style={{
        //   height: '100vh',
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   fontSize: 40,
        //   color: '#010101',
        // }}
      >
        <Searchbar onSubmit={this.hasFormSubmit} />
        <ImageGallery imagesName={this.state.imagesName} />
        {/* <ToastContainer /> */}
      </div>
    );
  }
}
