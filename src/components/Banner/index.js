import React from 'react';
import './banner.css';

const pics = [
  'almonds',
  'banana-chips',
  'berries',
  'biscuit',
  'chocdessert',
  'chocolate',
  'popcorn'
]

const berries = require(`../../../assets/${pics[Math.floor(Math.random()*pics.length)]}.jpg`);

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={"banner"} style={{ "backgroundImage": `url(${berries})` }} />
    );
  }
}

export default Banner;