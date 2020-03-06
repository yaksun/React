import React from 'react'

import './index.less'

export default class Main extends React.Component{
    render(){
        return(
            <div className='content'>
                {this.props.children}
            </div>
        )
    }
}
