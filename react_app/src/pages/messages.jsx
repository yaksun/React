import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'

import MyLink from '../components/mylink'
import MessageDetail from '../pages/message_detail'
class messages extends Component {
   state ={
       messages:[]
   }

   componentDidMount(){
     const messages=[
         {id:1,title:"消息一",content:"消息一出,谁与争锋"},
         {id:2,title:"消息二",content:"二进宫可不是闹着玩的"},
         {id:5,title:"消息五",content:"五谷丰登,歌舞升平"}
     ]

    //  模拟ajax请求
       setTimeout(()=>{
        this.setState({
            messages
           })
       },2000)
   }

//    push查看
   pushView = (id) =>{
         this.props.history.push(`/home/messages/detail/${id}`)
   }

//    replace查看
    replaceView = (id)=>{
        this.props.history.replace(`/home/messages/detail/${id}`)
    }

    backRoute=()=>{
        this.props.history.goBack()
    }

    forwardRoute=()=>{
        this.props.history.goForward()
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((message,index)=> <li key={index}>
                            <MyLink to={`/home/messages/detail/${message.id}`}>{message.title}</MyLink>
                            &nbsp;&nbsp; <button onClick={()=>{this.pushView(message.id)}}>push查看</button>
                             &nbsp;&nbsp; <button onClick={()=>{this.replaceView(message.id)}}>replace查看</button>
                            </li>)
                    }
                </ul>
                <button onClick={this.backRoute}>后退</button> &nbsp;&nbsp; <button onClick={this.forwardRoute}>请进</button>
                <hr/>
                <Route path="/home/messages/detail/:id" component={MessageDetail}></Route>
            </div>
        );
    }
}

export default messages;