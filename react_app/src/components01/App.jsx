import React,{Component} from 'react' 

import CommentAdd from './comment_add/comment_add'
import CommentList from './comment_list/comment_list'

import '../css/index.css'
export default class App extends Component{

    // state数据简写形式
    state={
        comments:[
            {'username':'小明','content':'react太简单了'},
            {'username':'jack','content':'react太难了吧'},
        ]
    }

    // 添加评论
    handleAdd=(comment)=>{
        // 三部曲
        // 获取数据
        const {comments} = this.state
        // 操作数据
        comments.unshift(comment)
        // 更新数据
        this.setState({
            comments
        })

    }

    // 删除评论
    handleDelete = (index) =>{
        const {comments} = this.state
        comments.splice(index,1)

        this.setState({
            comments
        })
    }

    render(){
        const {comments} = this.state
        return(
            <div>
               <div className="header">留下对React的评论</div>
                <div className="left">
                    <CommentAdd handleAdd={this.handleAdd} />
                </div>
                <div className="right">
                    <CommentList comments={comments} handleDelete={this.handleDelete} />
                </div>
            </div>
        )
    }

}