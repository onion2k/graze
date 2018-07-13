import React from 'react';
import './flash.css';

class Flash extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className={"flash"}>
        <div className={"content"}>{this.props.title}</div>
    </div>
    );
  }
}

export default Flash;