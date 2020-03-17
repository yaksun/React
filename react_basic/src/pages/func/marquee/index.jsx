import React from 'react'
import { Modal, Button } from 'antd';
import './index.css'


export default class Marquee extends React.Component{

    state = { visible: false };

    ScrollImgLeft = ()=>{
        var speed=50;
        var scroll_begin = document.getElementById("scroll_begin");
        var scroll_end = document.getElementById("scroll_end");
        var scroll_div = document.getElementById("scroll_div");
        scroll_end.innerHTML=scroll_begin.innerHTML;
        function Marquee(){
            if(scroll_end.offsetWidth-scroll_div.scrollLeft<=0)
                scroll_div.scrollLeft-=scroll_begin.offsetWidth;
            else
                scroll_div.scrollLeft++;
        }
        var MyMar=setInterval(Marquee,speed);
        scroll_div.onmouseover=function() {clearInterval(MyMar);}
        scroll_div.onmouseout=function() {MyMar=setInterval(Marquee,speed);}
    }
    componentDidMount(){
            this.ScrollImgLeft()
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

    render(){

  
        return (
            <div>
                <div id="gongao">
                <div  id="scroll_div" className="scroll_div">
                    <div id="scroll_begin" >
                <a href="#" target="_blank" onClick={this.showModal}>百度一下</a>
之所以在scroll_begin的div里面写这个多重复的文字，是因为这些文字的长度必须要大于scroll_div的div容器。如果小于div容易，则不会有一直滚动的效果。
换句话说：无缝滚动的内容宽度加起来必须要大于容器的宽度。
                    </div>
                    <div id="scroll_end"  ></div>
                </div>
            </div>

            <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
            </div>
        )
    }
}