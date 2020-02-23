import React from 'react'
import cssObj from '@/css/test.scss'

// 创建私有数据必须要使用构造函数带super
class Second extends React.Component{
    constructor(){
        super()
        this.state={
            msg:'我是私有的有'
        }

        // 改变方法指向
        this.changeMsg = this.changeMsg.bind(this)
    }

    render(){
        return <div>
            <h2 className={cssObj.title+' test'}>{this.state.msg}</h2>
            <button className="btn btn-primary" onClick={this.changeMsg}>测试bootstrap</button>
        </div>
    }

    changeMsg(){
        this.setState({
            msg:'我是修改后的数据'
        })
    }
}

export default Second