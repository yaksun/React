import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './index.css'
class comment_item extends Component {
    
    static propTypes={
        comment:PropTypes.object.isRequired,
        handleDelete:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired
    }


    handle_delete=()=>{
        const {handleDelete,index} = this.props

        handleDelete(index)

    }

    render() {
        const {comment} = this.props
        return (
            <li className="item">
                 <span>评论人:</span><span>{comment.username}</span><br/>
                  <span>内容:</span><span>{comment.content}</span><br/>
                  <button onClick={this.handle_delete}>删除</button>
            </li>
        );
    }
}

export default comment_item;