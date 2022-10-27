import { Component } from 'react';

export class Button extends Component {
  render() {
    const { onAddImg } = this.props;

    return (
      <button type="button" className="button" onClick={onAddImg}>
        Load more
      </button>
    );
  }
}
