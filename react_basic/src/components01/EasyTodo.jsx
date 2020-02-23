import React from 'react'
import HeaderTodo from '@/components/HeaderTodo'
import ListTodo from '@/components/ListTodo'

class EasyTodo extends  React.Component{
    constructor(){
        super()
        this.state={
            list:[
                {
                    title:'吃饭',
                    status:0
                },
                {
                    title:'睡觉',
                    status:1
                },
                {
                    title:'敲代码',
                    status:0
                }
            ]
        }

        this.addTodo = this.addTodo.bind(this)
    }

    render(){
        return ( <div>
                        <HeaderTodo  addTodo = {this.addTodo} listNum={this.state.list.length}/>
                        <ListTodo  list={this.state.list}/>
                 </div>)
        
    }

    addTodo(val){
            let todo = {title:val,status:0}

            let newlist = this.state.list
            // console.log(newlist)
            newlist.push(todo)
            // console.log(newlist)

            this.setState({
                list:newlist
            })

            }
}


export default EasyTodo