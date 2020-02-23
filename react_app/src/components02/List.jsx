import React, { Component } from 'react';
import PropTypes from 'prop-types'
import axios from 'axios'



class List extends Component {

    state={
        initView:true,
        loading:false,
        list:null,
        errorMsg:null
    }

    static propTypes={
        keyName:PropTypes.string.isRequired
    }

//    url=`https://api.github.com/search/users?q=${keyName}`


    // 当接收到新的数据时候触发
    componentWillReceiveProps(val){
        this.setState({
            initView:false,
            loading:true
        })

        console.log(val)

        let keyName = val.keyName
        let url=`https://api.github.com/search/users?q=${keyName}`

        axios.get(url).then((response)=>{
          if(response.status === 200){
            let res = response.data.items 
            // 遍历处理得到的数据，只取出需要的字段
             let list =  res.map((item)=>({
                avatar_img:item.avatar_url,
                username:item.login,
                url:item.html_url
                      }))
             this.setState({
                loading:false,
                list,
               
             })
          }

        }).catch((error)=>{
            this.setState({
                loading:false,
                errorMsg:error.message
            })
        })
    }

    render() {
      
                 const {initView,loading,list,errorMsg} = this.state

                            if(initView){
                                return <h2>请输入关键字，按下回车键搜索</h2>
                                   
                            }else if(loading){
                                return  <h2>数据正在加载中.......</h2>
                    
                            }else if(errorMsg){
            
                            return <h2>{errorMsg}</h2>
            
                            }else{
                               
                                return (
                                        <div>
                                        {
                                                      list.map((item,index)=>
                                                        (
                                         
                                                            <div key={index} style={{width:"33%",float:"left"}}>
                                                                <a href={item.url} >
                                                                   <img src={item.avatar_img} alt="" style={{width:100,height:100}}/>
                                                                </a>
                                                                 <p >{item.username}</p>
                                                            </div>
                                                        )
                                                      )
                                        }
                                        </div>
                                       
                                   
                                );
                            }
            
            
            
                    }
              

  
}

export default List;