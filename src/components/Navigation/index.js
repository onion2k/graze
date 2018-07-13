import React from 'react';
import './navigation.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={"navigation"}>{this.props.children}</div>
    );
  }
}

export default Navigation;