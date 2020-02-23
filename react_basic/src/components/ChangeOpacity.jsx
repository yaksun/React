import React from 'react'
import ReactDOM from 'react-dom'

// 认识react生命周期函数

class ChangeOpacity extends React.Component{
        constructor(props){
            super(props)
            this.state={
                opacity:1
            }
            console.log('constructor()')

            this.handleDistroy = this.handleDistroy.bind(this)
        }
        // 组件将要被挂载
        componentWillMount(){
            console.log('componentWillMount()')
        }

        // 组件将要更新
        componentWillUpdate(){
            console.log('componentWillUpdate()')
        }

        // 组件完成更新
        componentDidUpdate(){
            console.log('componentDidUpdate()')
        }


        // 卸载组件 unmountComponentAtNode
        handleDistroy(){
            ReactDOM.unmountComponentAtNode(document.getElementById('div1'))
        }

        // 当组件将要被卸载时触发的钩子函数
        componentWillUnmount(){
            console.log('componentWillUnmount()')
                clearInterval(this.timer)
        }


        // 当组件挂载完成时，启动定时器
        componentDidMount(){
               this.timer =  setInterval(()=>{
                    console.log('定时器开启')
                    let {opacity}= this.state
                    opacity-=0.1 
                    if(opacity<=0){
                        opacity=1
                    }

                    // 改变原始状态值,容易忘记的操作
                    this.setState({
                        opacity
                    })

                },200)
        }

        render(){
            console.log('render()')
            return (
               
                <div>
                    {/* 两层括号 */}
                    <h2 style={{opacity:this.state.opacity}}>你在哪</h2>
                    <button onClick={this.handleDistroy}>不找了</button>
                </div>
            )
        }
}

export default ChangeOpacity