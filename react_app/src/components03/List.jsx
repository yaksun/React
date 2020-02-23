import React, { Component } from 'react';
import axios from 'axios'
import PubSub from 'pubsub-js'


class List extends Component {

    state={
        initView:true,
        loading:false,
        list:null,
        errorMsg:null
    }


    componentDidMount(){
        PubSub.subscribe('searchUser',(msg,keyName)=>{

            this.setState({
                initView:false,
                loading:true
            })
    
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
    
        })
    }
  

//    url=`https://api.github.com/search/users?q=${keyName}`


    

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