import React from 'react'

class HeaderTodo extends React.Component{
    constructor(props){
        super(props)
        this.addHandle = this.addHandle.bind(this)
    }
    render(){
        return <div>
    {/* <input type="text" ref="item"/> */}
    {/* ref的另一种用法 */}
    <input type="text" ref={input => this.inputName = input}/>
    <button onClick={this.addHandle}>添加{this.props.listNum+1}</button>
        </div>
    }

    addHandle(){
        // let val = this.refs.item.value
        let val = this.inputName.value
        this.props.addTodo(val)

        this.inputName.value= ''
        
        // this.refs.item.value=''
    }
}


export default HeaderTodo