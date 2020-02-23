import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'

import MyLink from '../components/mylink'
import News from '../pages/news'
import Messages from '../pages/messages'

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <h2>home组件</h2>
                <ul>
                    <li>
                        <MyLink to="/home/news">News</MyLink>  
                    </li>
                    <li>
                     <MyLink to="/home/messages">Messages</MyLink>  
                    </li>
                </ul>
                <hr/>

                    <Switch>
                        <Route path="/home/news" component={News}></Route>
                        <Route path="/home/messages" component={Messages}></Route>
                        <Redirect to="/home/news"></Redirect>
                    </Switch>
            </div>
        );
    }
}

export default home;