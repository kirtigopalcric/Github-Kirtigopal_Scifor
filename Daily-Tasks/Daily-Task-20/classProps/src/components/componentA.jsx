import React, { Component } from 'react';
import B from './B'; // Import Component B

class A extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello from Component A!',
    };
  }

  render() {
    return (
      <div>
        <h1>Component A</h1>
        {/* Pass the state message as a prop to Component B */}
        <B message={this.state.message} />
      </div>
    );
  }
}

export default A;
