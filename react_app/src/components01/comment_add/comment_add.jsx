import React, { Component } from 'react';
import PropTypes from 'prop-types'

class comment_add extends Component {

    static propTypes={
        // 接收函数
        handleAdd:PropTypes.func.isRequired
    }

   state={
       username:'',
       content:''
   }

//    使用箭头函数简化this的绑定
   handleSubmit=(event)=>{
    //    阻止默认行为 
       event.preventDefault()
        const {handleAdd} = this.props
       const {username,content} = this.state

       console.log(this.state)

       handleAdd(this.state)

       this.setState({
        username:'',
        content:''
       })

   }

   handleUsername=(event)=>{
    let username = event.target.value 
    this.setState({
        username
    })
   }

   handleContent=(event)=>{
    let content = event.target.value 
    this.setState({
        content
    })

   }

    render() {
        const {username,content} = this.state
        return (
            <div>
               <form action="">
               <span>留言人:</span> <input type="text" value={username} onChange={this.handleUsername}/> <br/>
                <span>留言内容:</span><input type="text" value={content} onChange={this.handleContent}/><br/>
                <button onClick={this.handleSubmit}>提交</button>
               </form>
            </div>
        );
    }
}

export default comment_add;