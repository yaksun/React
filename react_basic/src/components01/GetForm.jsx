import React from 'react'

class GetForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userage:''
        }
        this.getInfo= this.getInfo.bind(this)
        this.changeHandle= this.changeHandle.bind(this)
    }


    render(){
     
        return (
            <div>
               <form action="#" onSubmit={this.getInfo}>
                   {/* 获取控件数据第一种写法 */}
               姓名:<input type="text" ref="username" /><br/>

               {/* 姓名:<input type="text" /><br/>  */}
                年龄:<input type="text" onChange={this.changeHandle} value={this.state.userage} /><br/>
                <input type="submit" value="提交"/>
               </form>
            </div>
        )
    }

    getInfo(){
         {/* 获取控件数据第一种写法 */}
        let username = this.refs.username.value
        let userage2 = this.state.userage
        console.log(username+'------'+userage2)
    }

    changeHandle(event){
            let newuserage = event.target.value
            // console.log(userage)

            this.setState({
                userage:newuserage
            })

    }
}

export default GetForm