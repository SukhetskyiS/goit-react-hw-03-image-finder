import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
// import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    imagesName: '',
  };

  handleNameChange = e => {
    this.setState({ imagesName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { imagesName } = this.state;

    if (imagesName.trim() === '') {
      alert('Please enter image name');
      //   toast('🦄 Wow so easy!');
      return;
    }

    this.props.onSubmit(imagesName);
    this.setState({ imagesName: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className="searchForm">
          <button type="submit" className="searchForm-button">
            <ImSearch />
          </button>

          <input
            className="searchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imagesName}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}
