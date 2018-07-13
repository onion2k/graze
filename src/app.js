import React, { Component } from 'react';

import Navigation from './components/Navigation'
import Banner from './components/Banner'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <Navigation><p>Navigation</p></Navigation>
                <Banner><p>Banner</p></Banner>
            </div>
        );
    }
}

export default App;