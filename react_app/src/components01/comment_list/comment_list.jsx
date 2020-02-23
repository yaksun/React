import React, { Component } from 'react';
import PropTypes from 'prop-types'

import CommentItem from '../comment_item/comment_item'

class comment_list extends Component {

    // propTypes 简写形式 使用static关键字，表示类的属性
    static propTypes={
        comments:PropTypes.array.isRequired,
        handleDelete:PropTypes.func.isRequired
    }

    render() {
        const {comments,handleDelete} = this.props
        if(comments.length===0){
              return <h2>暂时没有任何评论</h2>
        }else{
            return (
                <ul>
                    {
                        comments.map((comment,index)=>{
                        
                               return <CommentItem handleDelete={handleDelete} index={index} comment={comment} key={index} />
                        })
                    }
                </ul>
            );
        }
       
    }
}

export default comment_list;