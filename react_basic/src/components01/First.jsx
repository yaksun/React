import React from 'react'

class First extends React.Component{
    render(){
    return <h3>{this.props.name}---{this.props.age}</h3>
    }
}


export default First