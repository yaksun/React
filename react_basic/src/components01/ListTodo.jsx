import React from 'react'
import PropTypes from 'prop-types'

class ListTodo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <ul>
           {
               this.props.list.map((item,index)=>{
                return   <li key={index}>{item.title} </li>
            } )
           }
        </ul>
    }
}


ListTodo.propTypes ={
    list:PropTypes.array.isRequired
}

export default ListTodo