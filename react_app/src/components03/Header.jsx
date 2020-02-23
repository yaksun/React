import React, { Component } from 'react';
import PubSub from 'pubsub-js'

class Header extends Component {
    state={
        keyName:''
    }

    

    handleValue = (event)=>{
        let keyName = event.target.value 
         this.setState({
             keyName
         })
    }

    handleSearch = (event)=>{
         let key = event.keyCode
         const {keyName} = this.state
         if(key === 13 && keyName.trim()){
          
                PubSub.publish('searchUser',keyName.trim())

                //  清空搜索框
                this.setState({
                    keyName:''
                })
         }

     

    }

    render() {
        const {keyName} = this.state
        return (
            <div className="header">
                <input 
                type="text" 
                placeholder="请输入关键词,按回车键搜索" 
                value={keyName}  
                onChange={this.handleValue} 
                onKeyUp={this.handleSearch}
                />
            </div>
        );
    }
}

export default Header;