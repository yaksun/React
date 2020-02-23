import React, { Component } from 'react';

import Header from './Header'
import List from './List'

import '../css/index.css'

class App extends Component {

    

    render() {

        return (
            <div className="main">
                <Header />
                <List />
            </div>
        );
    }
}

export default App;