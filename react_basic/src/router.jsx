import React from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import 'antd/dist/antd.css'

import App from './app'
import Home from './pages/home'
import Login from './pages/login'
import NoMatch from './pages/nomatch'
import Admin from './pages/admin'
import Hotkeys from './pages/func/hotkeys'
import Autolink from './pages/func/autolink'
import Datasheet from './pages/table/datasheet'
import ImgLink from './pages/func/imglink'

export default class Router extends React.Component{
    render(){
        return(
            <App>
                 <HashRouter>
                        <Switch>
                            <Route path='/admin' render={()=>(
                                <Admin>
                                    <Route path='/admin/home' component={Home}></Route>
                                    <Route path='/admin/func/hotkeys' component={Hotkeys}></Route>
                                    <Route path='/admin/func/autolink' component={Autolink}></Route>
                                    <Route path='/admin/func/imglink' component={ImgLink}></Route>
                                    <Route path='/admin/table/datasheet' component={Datasheet}></Route>
                                    <Redirect path='/admin' to='/admin/home'></Redirect>
                                </Admin>
                            )}></Route>
                            <Route path='/login' component={Login}></Route>
                            <Redirect path='/' to='/login'></Redirect>
                        </Switch>
                 </HashRouter>
            </App>
        )
    }
}
