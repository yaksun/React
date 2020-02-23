import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class mylink extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <NavLink {...this.props}  activeClassName="myactive"/>
        );
    }
}

export default mylink;