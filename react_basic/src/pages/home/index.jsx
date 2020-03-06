import React from 'react'


export default class Main extends React.Component{
    render(){
        return(
          <div>
              接收路由传值
              { this.props.match.path  }
          </div>
        )
    }
}
