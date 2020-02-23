import React, { Component } from 'react';

import Header from './Header'
import List from './List'

import '../css/index.css'

class App extends Component {


// 父组件接收搜索框组件的关键字  传递给列表组件
    state={
        keyName:''
    }

    handleSearch  = (keyName)=>{
        this.setState({
            keyName
        })
    }

    render() {
        const {keyName} = this.state

        return (
            <div className="main">
                <Header handle_search={this.handleSearch}/>
                <List keyName={keyName}/>
            </div>
        );
    }
}

export default App;