import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Header extends Component {
    state={
        keyName:''
    }

    static propTypes={
        handle_search:PropTypes.func.isRequired
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
         let {handle_search} = this.props
         if(key === 13 && keyName.trim()){
            handle_search(keyName.trim())
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