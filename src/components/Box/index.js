import React from 'react';
import './box.css';

class Box extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default Box;