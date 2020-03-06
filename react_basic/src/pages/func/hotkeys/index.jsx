import React, { Component } from 'react';
import hotkeys from 'hotkeys-js'


class Hokeys extends Component {
     componentDidMount(){
        //  指定按下的键值
        // 2.指定键盘字母触发函数
        hotkeys('k',function(event,handler){
            event.preventDefault()
            alert('你在哪')
        })
    }
    render() {
        return (
            <div>
                <h2>实现页面快捷键功能</h2>
              <p>1.安装:cnpm i hotkeys-js --save</p>
              <p>2.指定键盘字母触发函数</p>
              <p>3.按下k测试效果</p>
            </div>
        );
    }
}

export default Hokeys;