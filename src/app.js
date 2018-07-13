import React, { Component } from 'react';
import './app.css';

import Navigation from './components/Navigation'
import Banner from './components/Banner'
import Flash from './components/Flash'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <Navigation><p>Navigation</p></Navigation>
                <Banner><Flash title={"Flash title goes here"} /></Banner>
            </div>
        );
    }
}

export default App;