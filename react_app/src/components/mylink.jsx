import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class mylink extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            // {...this.props}解构自己
            <NavLink {...this.props}  activeClassName="myactive"/>
        );
    }
}

export default mylink;