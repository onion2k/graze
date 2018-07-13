import React from 'react';

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default Editor;