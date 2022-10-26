import { Component } from 'react';
import { Vortex } from 'react-loader-spinner';

export class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
      </div>
    );
  }
}
