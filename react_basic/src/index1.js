import React from 'react'
import ReactDOM from 'react-dom'

// var vDiv = React.createElement('h1',{'title':'yaksun'},'这是我的第一个reactjs')

var arr=['我是谁','我在哪','要到哪']

// foreach循环的
/*
    var vDiv=[]
arr.forEach(item=>{
vDiv.push(<h2>{item}</h2>)
})


*/ 

// 循环标准语法
let vDiv =  arr.map((item,index)=>{
return <h4 key={index}>{item}</h4>
})

ReactDOM.render(vDiv,document.getElementById('div1'))