import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'


import Mylink from './mylink'
import '../css/index.css'
import About from '../pages/about'
import Home from '../pages/home'

class app extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <h2>路由基础案例</h2>
                <hr/>
                <div className="left">
                    {/* 链接 */}
                    {/* 自定义高亮样式 */}
                    {/* <NavLink to="/about" activeClassName="myactive">About</NavLink> */}
                    
                    {/* 自定义导航组件提取公共部分 */}
                    <ul>
                        <li>
                                <Mylink to="/home" >Home</Mylink> 
                        </li>
                        <li>
                                <Mylink to="/about" >About</Mylink>
                        </li>
                    </ul>

                </div>
                <div className="right">
                    {/* 跳转的组件 */}
                    <Switch>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                        <Redirect to="/home"></Redirect>
                    </Switch>
                </div>
            </div> 
        );
    }
}

export default app;