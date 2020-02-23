import React from 'react'
// 收集表单数据的方式

class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pwd:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePwd = this.handlePwd.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()

        let username = this.inputName.value
        let {pwd} = this.state 
        console.log('用户名是'+username,'密码是'+pwd)
    }

    handlePwd(event){
        let pwd = event.target.value 
        // 手动实现双向绑定
        this.setState({
            pwd
        })

    }

    render(){
        return (
            <form action="" onSubmit={this.handleSubmit}>
               姓名: <input ref={input => this.inputName = input} type="text"/> <br/>
               密码: <input  type="password" value={this.state.pwd}  onChange={this.handlePwd}/> <br/>
               <input type="submit" value="提交" />
            </form>
        )
    }
}


export default LoginForm